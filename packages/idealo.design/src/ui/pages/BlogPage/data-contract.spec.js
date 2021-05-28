const { Pact } = require('@pact-foundation/pact');
const { like, eachLike } = require('@pact-foundation/pact').Matchers;
const { fetchList, fetchUserInfo } = require('./data');
const path = require('path');

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

                provider.addInteraction({
                    uponReceiving: 'a request to authenticate',
                    withRequest: {
                        method: 'GET',
                        path: '/api/me',
                    },
                    willRespondWith: {
                        status: 200,
                        body: like(
                            {

                                status: like("LOGGED_IN"),
                                user: {
                                    displayName: like("Erika Mustermann"),
                                    givenName: like("Erika"),
                                    surname: like("Mustermann"),
                                    id: like("9f7430e7-4e1a-45dd-a3b1-1af9c6d48a1d")
                                }
                            }
                        ),
                    },
                });
            })
        );

        test('should return the correct data', async () => {
            const response = await fetchList(URL + PORT);
            console.log(response);
            expect(response[0].title).toBe('Test title');
            expect(response[0].categoryslug).toBe('Test categoryslug');
            expect(response[0].categorydisplayvalue).toBe('Test categorydisplayvalue');
        });

        test('should return user data', async () => {
            const response = await fetchUserInfo(URL + PORT);
            console.log(response);
            expect(response.status).toBe('LOGGED_IN');
            expect(response.user.displayName).toBe('Erika Mustermann');
            expect(response.user.givenName).toBe('Erika');
            expect(response.user.surname).toBe('Mustermann');
            expect(response.user.id).toBe('9f7430e7-4e1a-45dd-a3b1-1af9c6d48a1d');
        });

        afterEach(() => provider.verify());
        afterAll(() => provider.finalize());
    });
});