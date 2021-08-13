import {Pact, Matchers} from '@pact-foundation/pact'
import {
    fetchMap,
    fetchTags,
    fetchComponents,
    fetchSingleComponent
} from './component_data'
import path from 'path'

const {eachLike} = Matchers

const PORT = 4000;

const provider = new Pact({
    consumer: 'ComponentConsumer',
    provider: 'ComponentProvider',
    port: PORT,
    log: path.resolve(process.cwd(), 'src/__tests__/pact', 'pact.log'),
    dir: path.resolve(process.cwd(), 'src/__tests__/pact'),
    logLevel: 'INFO',
});

export const mockupComponent = {
    "component_id": 3,
    "title": "@motif/checkbox"
}

export const mockupSingleComponent = {
    "component_id": 1,
    "title": "@motif/button",
    "slug": '@motifbutton',
    "screenshots": [1,2,3],
    "tags": ["motif","button"],
    "readme": {"order":["Motif UI `button`","Installation","Usage"],"content":{"Usage":{"body":"```js\nimport { Button } from '@motif/button';\n```","head":"## Usage"},"Installation":{"body":"```bash\nyarn add @motif/button\n```","head":"## Installation"},"Motif UI `button`":{"body":"","head":"# Motif UI `button`"}}}
}

export const mockupTags = {"tag_name": "button"}

export const mockupMap = {
    "component_id": 4,
    "title": "@motif/button",
    "tag_name": "button"
}

describe('Component consumer contract', () => {
    afterAll(() => provider.finalize());
    beforeAll(() => provider.setup());
    afterEach(() => provider.removeInteractions())

    describe('Given a get call to the component-tags endpoint', () => {
        test('should return a component with tags', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list all components with tags',
                withRequest: {
                    method: 'GET',
                    path: '/api/map',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(mockupMap, {min: 1})
                }
            })

            const response = await fetchMap(provider.mockService.baseUrl);
            expect(response[0].component_id).toBe(4);
            expect(response[0].title).toBe('@motif/button');
            expect(response[0].tag_name).toBe('button');
        });
    })

    describe('Given a get call to the tags endpoint', () => {
        test('should return a tag', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list all tags',
                withRequest: {
                    method: 'GET',
                    path: '/api/tags',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(mockupTags, {min: 1})
                }
            })

            const response = await fetchTags(provider.mockService.baseUrl);
            expect(response[0].tag_name).toBe('button');
        });
    })

    describe('Given a get call to the components endpoint', () => {
        test('should return a component', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list all components',
                withRequest: {
                    method: 'GET',
                    path: '/api/components',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(mockupComponent, {min: 1})
                }
            })

            const response = await fetchComponents(provider.mockService.baseUrl);
            expect(response[0].component_id).toBe(3);
            expect(response[0].title).toBe('@motif/checkbox');
        });
    })

    describe('Given a get call to the SingleComponent endpoint', () => {
        test('should return a single component', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list a single component',
                withRequest: {
                    method: 'GET',
                    path: '/api/components/@motifbutton',
                },
                willRespondWith: {
                    status: 200,
                    body: mockupSingleComponent
                }
            })

            const response = await fetchSingleComponent({slug: '@motifbutton'},provider.mockService.baseUrl);
            expect(response.component_id).toBe(1);
            expect(response.title).toBe('@motif/button');
            expect(response.slug).toBe('@motifbutton');
            expect(response.tags).toStrictEqual(["motif","button"]);
            expect(response.screenshots).toStrictEqual([1,2,3]);
            expect(response.readme).toStrictEqual({"order":["Motif UI `button`","Installation","Usage"],"content":{"Usage":{"body":"```js\nimport { Button } from '@motif/button';\n```","head":"## Usage"},"Installation":{"body":"```bash\nyarn add @motif/button\n```","head":"## Installation"},"Motif UI `button`":{"body":"","head":"# Motif UI `button`"}}}
        )
        });
    })
});