import { Pact, Matchers } from '@pact-foundation/pact'
import {
    fetchList,
    fetchUserInfo,
    updateSinglePost,
    deleteSinglePost,
    archiveSinglePost,
    fetchPostsByCategorySlug,
    fetchDistinctCategories,
    fetchAllCategories,
    fetchSinglePost
} from './data'
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

const mockedBlogpost = {
    id:1,
    title:"Mocked Blogpost",
    categorydisplayvalue:"Test",
    categoryslug:"test",
    slug:"mocked-blogpost",
    date:"2021-05-28T09:04:55.343Z",
    image:"",
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

const mockedUpdatedBlogpost = {
    id:1,
    title:"Updated Mocked Blogpost",
    categorydisplayvalue:"Test",
    categoryslug:"test",
    slug:"updated-mocked-blogpost",
    blogpostcontent:
        {
            blocks:[
                {
                    key:"csc33",
                    data:{},
                    text:"This text was updated",
                    type:"unstyled",
                    depth:0,
                    entityRanges:[],
                    inlineStyleRanges:[]
                }],
            entityMap:{}
        },
}

const mockedArchivedBlogpost = {
    id:1,
    title:"Mocked Blogpost",
    categorydisplayvalue:"Test",
    categoryslug:"test",
    slug:"mocked-blogpost",
    date:"2021-05-28T09:04:55.343Z",
    image:"",
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
    isarchived:1
}

describe('all Tests', () => {
    afterAll(() => provider.finalize());
    beforeAll(() => provider.setup());

    describe('test list', () => {
        beforeEach(() => {
            provider.addInteraction({
                uponReceiving: 'a request to list all blogposts',
                withRequest: {
                    method: 'GET',
                    path: '/api/blogposts',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(mockedBlogpost, {min: 5})
                }
            });
        });
        test('should return a list of five blogposts', async () => {
            const response = await fetchList(URL + PORT);
            expect(response[0].title).toBe('Mocked Blogpost');
            expect(response[0].categoryslug).toBe('test');
            expect(response[0].categorydisplayvalue).toBe('Test');
        });
    })

    describe('When a request to single blogpost is made', () => {
        beforeEach(() =>
            provider.addInteraction({
                uponReceiving: 'a request to single blogpost',
                withRequest: {
                    method: 'GET',
                    path: '/api/blogposts/Test-2-previous-next',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(
                        mockedBlogpost
                    )
                }
            })
        );

        test('should return a single blogpost', async () => {
            const response = await fetchSinglePost({slug: "Test-2-previous-next"}, URL + PORT);
            expect(response.title).toBe('Mocked Blogpost');
            expect(response.categorydisplayvalue).toBe('Test');
            expect(response.categoryslug).toBe('test');
            expect(response.slug).toBe('mocked-blogpost');
            expect(response.date).toBe('2021-05-28T09:04:55.343Z');

            expect(response.blogpostcontent.blocks[0].key).toBe('csc33');
            expect(response.blogpostcontent.blocks[0].text).toBe('This is a dummy post');
            expect(response.blogpostcontent.blocks[0].type).toBe('unstyled');

        });
    });

    describe('test category slug', () => {
        beforeEach(() => {
            provider.addInteraction({
                uponReceiving: 'a request to single category',
                withRequest: {
                    method: 'GET',
                    path: "/api/blogposts/?test"
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(mockedBlogpost)
                }
            })

        })

        test('should return a list of blogposts with a single category ', async () => {
            const response = await fetchPostsByCategorySlug({categorySlug: "test"}, URL + PORT);
            expect(response[0].title).toBe('Mocked Blogpost');
            expect(response[0].categorydisplayvalue).toBe('Test');
            expect(response[0].categoryslug).toBe('test');
            expect(response[0].slug).toBe('mocked-blogpost');
            expect(response[0].date).toBe('2021-05-28T09:04:55.343Z');

            expect(response[0].blogpostcontent.blocks[0].key).toBe('csc33');
            expect(response[0].blogpostcontent.blocks[0].text).toBe('This is a dummy post');
            expect(response[0].blogpostcontent.blocks[0].type).toBe('unstyled');

        })
    })

    describe('test to archive a single post', ()=>{
        beforeEach(() => {
            provider.addInteraction({
                uponReceiving: 'a request to archive a blogpost',
                withRequest: {
                    method: 'PUT',
                    path: '/api/blogposts/archive',
                    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                    body: mockedBlogpost
                },
                willRespondWith: {
                    status: 200,
                    body: like(mockedArchivedBlogpost)
                }
            });
        })

        test('should return archived blogpost', async () => {
            const response = await archiveSinglePost(mockedBlogpost, ()=>{},URL + PORT);
            expect(response.isarchived).toBe(1);
        });
    })

    describe('test to delete a single post', ()=> {
        beforeEach(() => {
            provider.addInteraction({
                uponReceiving: 'a request to delete a blogpost',
                withRequest: {
                    method: 'DELETE',
                    path: '/api/blogposts/delete',
                    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                    body: mockedBlogpost,
                },
                willRespondWith: {
                    status: 200,
                    body: 'successfully deleted blogpost'
                }
            });
        })

        test('should return the deleted blogpost', async () => {
            const response = await deleteSinglePost(mockedBlogpost, () => {}, URL + PORT);
            expect(response).toBe('successfully deleted blogpost')
        });
    })

    describe('test to update a single post', ()=> {
        beforeEach(()=> {
            provider.addInteraction({
                uponReceiving: 'a request to update a blogpost',
                withRequest: {
                    method: 'PUT',
                    path: '/api/blogposts',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: mockedBlogpost
                },
                willRespondWith: {
                    status: 200,
                    body: like(mockedUpdatedBlogpost)
                }
            })
        })

        test('should return update Blogpost', async () => {
            const response = await updateSinglePost({slug: 'mocked-blogpost', post: mockedBlogpost},()=>{},URL+PORT,);
            expect(response.title).toBe('Updated Mocked Blogpost')
            expect(response.slug).toBe('updated-mocked-blogpost')
        })
    })

    describe('When a request to fetch distinct categories is made', () => {
        beforeEach(()=> {
            provider.addInteraction({
                uponReceiving: 'a request to fetch distinct categories',
                withRequest: {
                    method: 'GET',
                    path: '/api/distinctCategories',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(
                        {
                            categorydisplayvalue: like("Testing Category"),
                            categoryslug: like("testing-category")
                        },
                        { min: 4 }
                    )
                }
            })
        })

        test('should return categories', async () => {
            const response = await fetchDistinctCategories(URL + PORT);
            expect(response[0].categorydisplayvalue).toBe('Testing Category');
            expect(response[0].categoryslug).toBe('testing-category');
        })
    })

    describe('When a request to list all categories is made', ()=> {
        beforeEach(()=> {
            provider.addInteraction({
                uponReceiving: 'a request to list all categories',
                withRequest: {
                    method: 'GET',
                    path: '/api/categories',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(
                        {
                            categoryslug: like("new-category"),
                            sum : 4

                        },
                        { min: 4 }
                    )
                }
            })
        })

        test('should return categories', async () => {
            const response = await fetchAllCategories(URL + PORT);
            expect(response[0].categoryslug).toBe('new-category');
            expect(response[0].sum).toBe(4);
        })
    })

    describe('test user login', ()=> {
        beforeEach(()=> {
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

        test('should return user data', async () => {
            const response = await fetchUserInfo(URL + PORT);
            expect(response.status).toBe('LOGGED_IN');
            expect(response.user.displayName).toBe('Jane Doe');
            expect(response.user.givenName).toBe('Jane');
            expect(response.user.surname).toBe('Doe');
            expect(response.user.id).toBe('ABC1234');
        });
    })
});