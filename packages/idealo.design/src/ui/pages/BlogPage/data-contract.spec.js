import { Pact, Matchers } from '@pact-foundation/pact'
import {fetchList, fetchUserInfo, updateSinglePost, deleteSinglePost, archiveSinglePost} from './data'
import path from 'path'
import {cb} from './Editor/Editor'
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



describe('When a request to get the current user', () => {
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

const mockedBlogpost = {
    id:1,
    title:"Mocked Blogpost",
    nextpost:"Test-5",
    previouspost:null,
    categorydisplayvalue:"Test",
    categoryslug:"test",
    slug:"mocked-blogpost",
    date:"2021-05-28T09:04:55.343Z",
    image:"",
    autor:"Dummy author",
    email:null,
    instagram:null,
    twitter:null,
    github:null,
    facebook:null,
    blogpostcontent:
        {
            blocks:[
                {
                    key:"csc33",
                    data:{},
                    text:"This is a dummy post",
                    type:"unstyled",
                    depth:0,
                    entityRanges:[],
                    inlineStyleRanges:[]
                }],
            entityMap:{}
        },
    isarchived:0
}

describe('user updates a blogpost', () => {
    beforeAll(() =>
        provider.setup().then(() => {
            provider.addInteraction({
                uponReceiving: 'a request to update a blogpost',
                withRequest: {
                    method: 'PUT',
                    path: '/api/blogposts',
                },
                willRespondWith: {
                    status: 200,
                    body: like(mockedBlogpost)
                }
            });
        })
    );

    test('should return user data', async () => {
        const response = await updateSinglePost(URL+PORT, 'mocked-blogpost', mockedBlogpost,cb=>{});
        console.log(response)
        /*expect(response.id).toBe(1);
        expect(response.title).toBe('Mocked Blogpost');
        expect(response.blogpostcontent.blocks[0].text).toBe('This is a dummy post');
        expect(response.slug).toBe('mocked-blogpost');
        expect(response.autor).toBe('Dummy author');*/
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});


describe('When a request to delete a blogposts is made', () => {
    beforeAll(() =>
        provider.setup().then(() => {
            provider.addInteraction({
                uponReceiving: 'a request to delete a blogpost',
                withRequest: {
                    method: 'DELETE',
                    path: '/api/blogposts/delete',
                },
                willRespondWith: {
                    status: 200,
                    body: like(mockedBlogpost)
                }
            });
        })
    );

    test('should return user data', async () => {
        const response = await deleteSinglePost(mockedBlogpost, URL + PORT);
        expect(response.id).toBe(1);
        expect(response.title).toBe('Mocked Blogpost');
        expect(response.blogpostcontent.blocks[0].text).toBe('This is a dummy post');
        expect(response.slug).toBe('mocked-blogpost');
        expect(response.autor).toBe('Dummy author');
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});

describe('user archives a blogpost', () => {
    beforeAll(() =>
        provider.setup().then(() => {
            provider.addInteraction({
                uponReceiving: 'a request to archive a blogpost',
                withRequest: {
                    method: 'PUT',
                    path: '/api/blogposts/archive',
                },
                willRespondWith: {
                    status: 200,
                    body: {
                        id: 1,
                        title: like("Mocked Blogpost"),
                        categoryslug: like("test"),
                        categorydisplayvalue: like("Test"),
                        isarchived: like(1)
                    }
                }
            });
        })
    );

    test('should return archived blogpost', async () => {
        const response = await archiveSinglePost(mockedBlogpost, URL + PORT);
        console.log(response)
        /*expect(response.id).toBe(1);
        expect(response.title).toBe('Mocked Blogpost');
        expect(response.blogpostcontent.blocks[0].text).toBe('This is a dummy post');
        expect(response.slug).toBe('mocked-blogpost');
        expect(response.autor).toBe('Dummy author');*/
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});