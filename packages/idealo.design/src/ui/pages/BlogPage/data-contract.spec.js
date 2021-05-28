import { Pact, Matchers } from '@pact-foundation/pact'
import { fetchList,fetchUserInfo } from './data'
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
            console.log(response);
            expect(response[0].title).toBe('Test title');
            expect(response[0].categoryslug).toBe('Test categoryslug');
            expect(response[0].categorydisplayvalue).toBe('Test categorydisplayvalue');
        });


        afterEach(() => provider.verify());
        afterAll(() => provider.finalize());
    });
});

describe('Blogposts Service', () => {
    describe('When a request to list all blogposts is made', () => {
        beforeAll(() =>
            provider.setup().then(() => {
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
                                    displayName: like("Jane Doe"),
                                    givenName: like("Jane"),
                                    surname: like("Doe"),
                                    id: like("ABC1234")
                                }
                            }
                        )
                    }
                });
            })
        );

        test('should return user data', async () => {
            const response = await fetchUserInfo(URL + PORT);
            console.log(response);
            console.log(response.status);
            expect(response.status).toBe('LOGGED_IN');
            expect(response.user.displayName).toBe('Jane Doe');
            expect(response.user.givenName).toBe('Jane');
            expect(response.user.surname).toBe('Doe');
            expect(response.user.id).toBe('ABC1234');
        });

        afterEach(() => provider.verify());
        afterAll(() => provider.finalize());
    });
});