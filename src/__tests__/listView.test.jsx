import {
  fetchUserInfo,
  fetchList,
  fetchPostsByCategorySlug,
} from "../ui/pages/BlogPage/data";
import { render, screen, waitFor } from "@testing-library/react";
import { ListView } from "../ui/pages/BlogPage/ListView";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

jest.mock("../ui/pages/BlogPage/data", () => {
  return {
    fetchUserInfo: jest.fn(),
    fetchList: jest.fn(),
    fetchPostsByCategorySlug: jest.fn(),
  };
});

test("listView gets rendered with user logged in", async () => {
  const mockupBlogpost = {
    id: 1111,
    title: "A mockup blogpost",
    nextpost: "docker",
    previouspost: "mein-erstes-mal-mit-react",
    categorydisplayvalue: "Docker",
    categoryslug: "docker",
    slug: "Einstieg-in-die-Welt-der-Datenbanken",
    date: "2021-01-20T13:46:44.351Z",
    image: "https://s12.directupload.net/images/210212/bd5j6kn8.jpg",
    autor: "Mock-up Post Author",
    email: "mock-up-posts@gmail.com",
    instagram: null,
    twitter: null,
    github: null,
    facebook: null,
    blogpostcontent: {
      blocks: [
        {
          key: "3aovx",
          data: {},
          text: "Just some simple mockup text!",
          type: "unstyled",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {},
    },
    isarchived: 0,
  };
  const userInfo = {
    status: "LOGGED_IN",
    user: {
      "@odata.context": null,
      businessPhones: [],
      displayName: null,
      givenName: null,
      jobTitle: null,
      mail: null,
      mobilePhone: null,
      officeLocation: null,
      preferredLanguage: null,
      surname: null,
      userPrincipalName: null,
      id: null,
    },
  };
  const mockedParams = {
    match: { params: { slug: "whatever-id" } },
  };

  fetchPostsByCategorySlug.mockReturnValue([mockupBlogpost]);
  fetchList.mockReturnValue([mockupBlogpost]);
  fetchUserInfo.mockReturnValue(userInfo);

  render(<ListView {...mockedParams} />);

  await waitFor(() => {
    const newPostButton = screen.getByTitle("newPostButton");
    expect(newPostButton).toBeInTheDocument();

    const blogpostTitle = screen.getByTitle("blogpostTitle");
    expect(blogpostTitle).toBeInTheDocument();

    const blogpostPreview = screen.getByTitle("blogpostPreview");
    expect(blogpostPreview).toBeInTheDocument();
  });
});

test("listView gets rendered with user not logged in", async () => {
  const mockupBlogpost = {
    id: 1111,
    title: "A mockup blogpost",
    nextpost: "docker",
    previouspost: "mein-erstes-mal-mit-react",
    categorydisplayvalue: "Docker",
    categoryslug: "docker",
    slug: "Einstieg-in-die-Welt-der-Datenbanken",
    date: "2021-01-20T13:46:44.351Z",
    image: "https://s12.directupload.net/images/210212/bd5j6kn8.jpg",
    autor: "Mock-up Post Author",
    email: "mock-up-posts@gmail.com",
    instagram: null,
    twitter: null,
    github: null,
    facebook: null,
    blogpostcontent: {
      blocks: [
        {
          key: "3aovx",
          data: {},
          text: "Just some simple mockup text!",
          type: "unstyled",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {},
    },
    isarchived: 0,
  };

  const userInfo = {
    status: "NOT_LOGGED_IN",
    user: {
      "@odata.context": null,
      businessPhones: [],
      displayName: null,
      givenName: null,
      jobTitle: null,
      mail: null,
      mobilePhone: null,
      officeLocation: null,
      preferredLanguage: null,
      surname: null,
      userPrincipalName: null,
      id: null,
    },
  };

  const mockedParams = {
    match: { params: { slug: "whatever-id" } },
  };

  fetchPostsByCategorySlug.mockReturnValue([mockupBlogpost]);
  fetchList.mockReturnValue([mockupBlogpost]);
  fetchUserInfo.mockReturnValue(userInfo);

  render(<ListView {...mockedParams} />);

  const newPostButton = screen.queryByTitle("newPostButton");
  expect(newPostButton).not.toBeInTheDocument();

  await waitFor(() => {
    const blogpostTitle = screen.getByTitle("blogpostTitle");
    expect(blogpostTitle).toBeInTheDocument();

    const blogpostPreview = screen.getByTitle("blogpostPreview");
    expect(blogpostPreview).toBeInTheDocument();
  });
});
