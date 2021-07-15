import {Pact, Matchers} from '@pact-foundation/pact'
import {
    fetchMap,
    fetchTags,
    fetchComponents
} from './component_data'
import path from 'path'

const {eachLike, like} = Matchers

const PORT = 4000;
const URL = 'http://localhost:';

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

export const mockupTags = {"tag_name": "button"}

export const mockupMap = {
    "component_id": 4,
    "title": "@motif/button",
    "tag_name": "button"
}

describe('all Tests', () => {
    afterAll(() => provider.finalize());
    beforeAll(() => provider.setup());
    afterEach(() => provider.removeInteractions())

    describe('test Components+Tags(Map) list', () => {
        test('should return a list of one component', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list all components',
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

    describe('test Tags', () => {
        test('should return a tag', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list a tag',
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

    describe('test Component', () => {
        test('should return a component', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list a component',
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
});