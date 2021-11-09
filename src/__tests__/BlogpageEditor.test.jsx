import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { RichTextEditor } from "../ui/pages/BlogPage/Editor/Editor";
import {fetchSinglePost, fetchUserInfo} from "../ui/pages/BlogPage/data";

jest.mock("../ui/pages/BlogPage/data", () => {
  return {
    fetchUserInfo: jest.fn(),
    fetchSinglePost: jest.fn(),
    fetchAllCategories: jest.fn(),
  };
});

jest.mock("../ui/pages/BlogPage/Editor/Editor", () => {
  return {
    ...jest.requireActual("../ui/pages/BlogPage/Editor/Editor"),
    handleSubmit: jest.fn(),
    handleCancellation: jest.fn(),
  };
});

test("editor is rendered correctly when the mode is create", () => {
  const userInfo = {
    status: "LOGGED_IN",
    user: {
      displayName: "Testuser",
    },
  };

  fetchUserInfo.mockReturnValue(userInfo)

  const mockedParams = {
    match: { params: { slug: "" } },
    history: { block: jest.fn() },
  };

  render(<RichTextEditor {...mockedParams} />);

  const submitButton = screen.getByRole("button", { name: "submitButton" });
  expect(submitButton).toBeInTheDocument();

  const cancelButton = screen.getByRole("button", { name: "cancelButton" });
  expect(cancelButton).toBeInTheDocument();

  const editorHeading = screen.getByTitle("createHeading");
  expect(editorHeading).toBeInTheDocument();

  const titleInput = screen.getByTitle("titleInput");
  expect(titleInput).toBeInTheDocument();

  const categorySelect = screen.getByTitle("categorySelect");
  expect(categorySelect).toBeInTheDocument();

  const editorInputField = screen.getByTitle("editorInputField");
  expect(editorInputField).toBeInTheDocument();
});

test("editor is rendered with filled in fields and buttons in the edit mode", async () => {
  const post = {
    title: "Test title",
    categoryslug: "Test categoryslug",
    categorydisplayvalue: "Test categorydisplayvalue",
    blogpostcontent: {
      blocks: [
        {
          key: "3g47c",
          data: {},
          text: "Test content",
          type: "unstyled",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {},
    },
  };

  const userInfo = {
    status: "LOGGED_IN",
    user: {
      displayName: "Testuser",
    },
  };

  fetchUserInfo.mockReturnValue(userInfo)
  fetchSinglePost.mockReturnValue(post);

  const mockedParams = {
    match: { params: { slug: "whatever-id" } },
    history: { block: jest.fn() },
  };

  render(<RichTextEditor {...mockedParams} />);

  await waitFor(() => {
    expect(screen.getByTitle("submitButton")).toBeInTheDocument();
    expect(screen.getByTitle("cancelButton")).toBeInTheDocument();

    expect(screen.getByTitle("titleInput")).toHaveValue(post.title);
    expect(screen.getByText(post.categorydisplayvalue)).toBeInTheDocument();
    expect(
      screen.getByText(post.blogpostcontent.blocks[0].text)
    ).toBeInTheDocument();
  });
});
