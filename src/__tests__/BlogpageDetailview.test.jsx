import { fetchSinglePost, fetchUserInfo, fetchPrevSlugAndNextSlugById } from "../ui/pages/BlogPage/data";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DetailView } from "../ui/pages/BlogPage/DetailView";
import React from "react";

jest.mock("../ui/pages/BlogPage/data", () => {
  return { fetchUserInfo: jest.fn(), fetchSinglePost: jest.fn(), fetchPrevSlugAndNextSlugById: jest.fn() };
});

const mockupPrevNextBlogpost = [
  {
    slug: 'mockupPrevBlogpost'
  },
  {
    slug: 'mockupNextBlogpost'
  }
]

const mockupBlogpost = {
  id: 2,
  title: "A mockup blogpost",
  nextpost: 1,
  previouspost: 3,
  categorydisplayvalue: "Docker",
  categoryslug: "docker",
  slug: "Einstieg-in-die-Welt-der-Datenbanken",
  date: "2021-01-20T13:46:44.351Z",
  image: "https://myimage.jpg",
  autor: "Mock-up Author",
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


test("detailView gets rendered with content and buttons", async () => {
  fetchUserInfo.mockReturnValue(userInfo);
  fetchSinglePost.mockReturnValue(mockupBlogpost);
  fetchPrevSlugAndNextSlugById.mockReturnValue(mockupPrevNextBlogpost)

  const mockedParams = {
    match: { params: { slug: "Einstieg-in-die-Welt-der-Datenbanken" } },
  };

  render(<DetailView {...mockedParams} />);

  await waitFor(() => {
    expect(screen.getByText("A mockup blogpost")).toBeInTheDocument();
    expect(screen.getByText("Mock-up Author")).toBeInTheDocument();
    expect(
      screen.getByText("Just some simple mockup text!")
    ).toBeInTheDocument();
    const blogpostImage = screen.getByRole("img", { name: "blogpostImage" });
    expect(blogpostImage).toBeInTheDocument();
    expect(blogpostImage.src).toContain(
      "https://myimage.jpg"
    );

    expect(screen.getByTitle("editButton")).toBeInTheDocument();
    expect(screen.getByTitle("deleteButton")).toBeInTheDocument();
    expect(screen.getByTitle("prevPost").getAttribute("href")).toBe("/blog/mockupPrevBlogpost");
    expect(screen.getByTitle("nextPost").getAttribute("href")).toBe("/blog/mockupNextBlogpost");
  });

  fireEvent.click(screen.getByTitle("deleteButton"));

  await waitFor(() => {
    expect(screen.getByText("Do you want to delete or archive that post?"));
    expect(screen.getByText("Close"));
    expect(screen.getByText("Archive"));
    expect(screen.getByTitle("promptDeleteButton"));
  });
});

test("detailView gets rendered with content but without edit and delete button", async () => {
  fetchUserInfo.mockReturnValue(userInfo);
  fetchSinglePost.mockReturnValue(mockupBlogpost);

  const mockedParams = {
    match: { params: { slug: "Einstieg-in-die-Welt-der-Datenbanken" } },
  };

  render(<DetailView {...mockedParams} />);

  expect(screen.queryByTitle("editButton")).not.toBeInTheDocument();
  expect(screen.queryByTitle("deleteButton")).not.toBeInTheDocument();
});