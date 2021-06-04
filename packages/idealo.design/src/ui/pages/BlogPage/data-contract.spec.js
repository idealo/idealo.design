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

    test('should return a list of five blogposts', async () => {
        const response = await fetchList(URL + PORT);
        console.log(response);
        expect(response[0].title).toBe('Test title');
        expect(response[0].categoryslug).toBe('Test categoryslug');
        expect(response[0].categorydisplayvalue).toBe('Test categorydisplayvalue');
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});


describe('When a request to single blogpost is made', () => {
    beforeAll(() =>
        provider.setup().then(() => {
            provider.addInteraction({
                uponReceiving: 'a request to single blogpost',
                withRequest: {
                    method: 'GET',
                    path: '/api/blogposts/Test-2-previous-next',
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(
                        {
                            id: 29,
                            title: like("Test 2 previous next"),
                            nextpost: like("Test-next-and-validation"),
                           // previouspost: null,
                            categorydisplayvalue: like("Test"),
                            categoryslug: like("test"),
                            slug: like("Test-2-previous-next"),
                            date: like("2021-05-10T07:19:17.046Z"),
                            blogpostcontent: {
                                blocks: [{
                                    key: like("7n8i3"),
                                    data: {},
                                    text: like("Lorem ipsum dolor sit amet"),
                                    type: like("unstyled"),
                                }],
                            }
                        },
                    ),
                },
            });

        })
    );

    test('should return a single blogpost', async () => {
        const response = await fetchSinglePost({slug: "Test-2-previous-next"}, URL + PORT);
        expect(response.title).toBe('Test 2 previous next');
        expect(response.nextpost).toBe('Test-next-and-validation');
        expect(response.categorydisplayvalue).toBe('Test');
        expect(response.categoryslug).toBe('test');
        expect(response.slug).toBe('Test-2-previous-next');
        expect(response.date).toBe('2021-05-10T07:19:17.046Z');

        expect(response.blogpostcontent.blocks[0].key).toBe('7n8i3');
        expect(response.blogpostcontent.blocks[0].text).toBe('Lorem ipsum dolor sit amet');
        expect(response.blogpostcontent.blocks[0].type).toBe('unstyled');

    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});

describe('When a request to single category is made', () => {
    beforeAll(() =>
        provider.setup().then(() => {
            provider.addInteraction({
                uponReceiving: 'a request to single category',
                withRequest: {
                    method: 'GET',
                    path: "/api/blogposts",
                    query: "byCategorySlug=test",
                },
                willRespondWith: {
                    status: 200,
                    body: eachLike(mockedBlogpost),
                },
            });

        })
    );

    test('should return a list of blogposts with a single category ', async () => {
        const response = await fetchPostsByCategorySlug({categorySlug: "test"}, URL + PORT);
        console.log(response);
        expect(response[0].title).toBe('Mocked Blogpost');
      //  expect(response[0].nextpost).toBe('Test-5');
        /*expect(response[0].previouspost).toBe('Test-2-previous-next');
        expect(response[0].categorydisplayvalue).toBe('Docker');
        expect(response[0].categoryslug).toBe('docker');
        expect(response[0].slug).toBe('Test-next-and-validation');
        expect(response[0].date).toBe('2021-05-10T07:16:23.300Z');

        expect(response[0].blogpostcontent.blocks[0].key).toBe('aun0b');
        expect(response[0].blogpostcontent.blocks[0].text).toBe('Lorem ipsum dolor sit amet');
        expect(response[0].blogpostcontent.blocks[0].type).toBe('header-two');*/

    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});



/*
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
*/


const mockedBlogpost = {
    id:1,
    title:"Mocked Blogpost",
  //  nextpost:"Test-5",
  //  previouspost:null,
    categorydisplayvalue:"Test",
    categoryslug:"test",
    slug:"mocked-blogpost",
    date:"2021-05-28T09:04:55.343Z",
    image:"",
  //  autor:null,
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
    autor:"author can't be updated",
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
    isarchived:1
}

describe('user archives a blogpost', () => {
    beforeAll(() =>
        provider.setup().then(() => {
            provider.addInteraction({
                uponReceiving: 'a request to archive a blogpost',
                withRequest: {
                    method: 'PUT',
                    path: '/api/blogposts/archive',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: mockedBlogpost,
                },
                willRespondWith: {
                    status: 200,
                    body: {mockedBlogpost}
                }
            });
        })
    );

    test('should return archived blogpost', async () => {
        const response = await archiveSinglePost(mockedBlogpost, URL + PORT);
        console.log(response)
        //expect(response.isarchived).toBe(1);
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
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: mockedBlogpost,
                },
                willRespondWith: {
                    status: 200,
                    body: {mockedBlogpost}
                }
            });
        })
    );

    test('should return the deleted blogpost', async () => {
        const response = await deleteSinglePost(mockedBlogpost, URL + PORT);
        expect(response.id).toBe(1);
        expect(response.title).toBe('Mocked Blogpost');
        expect(response.blogpostcontent.blocks[0].text).toBe('This is a dummy post');
        expect(response.slug).toBe('mocked-blogpost');
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});


describe('When a request to update a blogpost is made', () => {
    beforeAll(() =>
        provider.setup().then(() => {
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
                    body: like(mockedBlogpost)
                }
            });
        })
    );

    test('should return update Blogpost', async () => {
        const response = await updateSinglePost({slug: 'mocked-blogpost', post: mockedBlogpost},cb=>{},URL+PORT,);
        console.log('test response', response)
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});

describe('When a request to fetch distinct categories is made', () => {
    beforeAll(() =>
        provider.setup().then(() => {
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
            });
        })
    );

    test('should return categories', async () => {
        const response = await fetchDistinctCategories(URL + PORT);
        expect(response[0].categorydisplayvalue).toBe('Testing Category');
        expect(response[0].categoryslug).toBe('testing-category');
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});


describe('When a request to list all categories is made', () => {
    beforeAll(() =>
        provider.setup().then(() => {
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
                    ),
                },
            });
        })
    );

    test('should return categories', async () => {
        const response = await fetchAllCategories(URL + PORT);
        expect(response[0].categoryslug).toBe('new-category');
        expect(response[0].sum).toBe(4);
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
});



