import {Pact, Matchers} from '@pact-foundation/pact'
import {
    fetchMap,
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

export const mockupComponent = [{
    "component_id": 1,
    "title": "@motif/button",
}, {
    "component_id": 2,
    "title": "@motif/pl-button",
}, {
    "component_id": 3,
    "title": "@motif/checkbox",
}]

export const mockupTags = [
    {"tag_name": "motif"},
    {"tag_name": "motif-ui"},
    {"tag_name": "button"},
    {"tag_name": "checkbox"}
]

export const mockupMap = {
    "component_id": 1,
    "title": "@motif/button",
    "tag_name": "button"
}

describe('all Tests', () => {
    afterAll(() => provider.finalize());
    beforeAll(() => provider.setup());
    afterEach(() => provider.removeInteractions())

    describe('test Components list', () => {
        test('should return a list of three components', async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list all components',
                withRequest: {
                    method: 'GET',
                    path: '/api/map',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(mockupMap, {min: 3})
                }
            })

            const response = await fetchMap(provider.mockService.baseUrl);
            expect(response[0].component_id).toBe(1);
            expect(response[0].title).toBe('@motif/button');
            expect(response[0].tag_name).toBe('button');
        });
    })
});