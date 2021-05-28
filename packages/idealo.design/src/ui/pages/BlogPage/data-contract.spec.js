import { Pact, Matchers } from '@pact-foundation/pact'
import { fetchList } from './data'
import path from 'path'

const { eachLike, like } = Matchers
const PORT = 4000;
const URL = 'http://localhost:';

const provider = new Pact({
    consumer: 'Consumer',
    provider: 'Provider',
    port: PORT,
    log: path.resolve(process.cwd(), 'src/__tests__/pact', 'pact.log'),
    dir: path.resolve(process.cwd(), 'src/__tests__/pact'),
    logLevel: 'INFO',
});

describe('Blogposts Service', () => {
    describe('When a request to list all blogposts is made', () => {
        beforeAll(() =>
            provider.setup().then(() => {
                provider.addInteraction({
                    uponReceiving: 'a request to list all blogposts',
                    withRequest: {
                        method: 'GET',
                        path: '/api/blogposts',
                    },
                    willRespondWith: {
                        status: 200,
                        body: eachLike(
                            {
                                id: 1,
                                title: like("Test title"),
                                categoryslug: like("Test categoryslug"),
                                categorydisplayvalue:like("Test categorydisplayvalue"),
                            },
                            { min: 5 }
                        ),
                    },
                });
            })
        );

        test('should return the correct data', async () => {
            const response = await fetchList(URL + PORT);
            expect(response[0].title).toBe('Test title');
            expect(response[0].categoryslug).toBe('Test categoryslug');
            expect(response[0].categorydisplayvalue).toBe('Test categorydisplayvalue');
        });

        afterEach(() => provider.verify());
        afterAll(() => provider.finalize());
    });
});