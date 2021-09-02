import { fetchUserInfo } from "../ui/pages/BlogPage/data";
import {
  fetchComponents,
  fetchTags,
} from "../ui/pages/LibraryPage/component_data";
import { render, screen, waitFor } from "@testing-library/react";
import { ComponentsListView } from "../ui/pages/LibraryPage/ComponentsListView";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

jest.mock("../ui/pages/BlogPage/data", () => {
  return { fetchUserInfo: jest.fn() };
});

jest.mock("../ui/pages/LibraryPage/component_data", () => {
  return {
    fetchComponents: jest.fn(),
    fetchTags: jest.fn(),
    fetchSingleComponent: jest.fn(),
  };
});

jest.mock("../ui/components/LoginMessage", () => () => <div/>);

describe("test ListView", () => {

  const mockupComponent = [
    {
      component_id: 1,
      title: "button",
      screenshots: [1, 2, 3],
      tags: ["motif", "button"],
    },
    {
      component_id: 2,
      title: "pl-button",
      screenshots: [5, 6, 7],
      tags: ["motif", "button", "motif-ui"],
    },
    {
      component_id: 3,
      title: "checkbox",
      screenshots: [4],
      tags: ["motif", "checkbox"],
    },
    {
      component_id: 4,
      title: "Badges",
      screenshots: [],
      tags: ["figma","badges"]
    }
  ];

  const mockupTags = [
    {tag_name: "motif"},
    {tag_name: "motif-ui"},
    {tag_name: "button"},
    {tag_name: "react"},
  ];

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

  test("ComponentsListView gets rendered with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchComponents.mockReturnValue([mockupComponent[0]]);
    fetchTags.mockReturnValue(mockupTags);

    render(<ComponentsListView/>);

    await waitFor(() => {
      const componentTitle = screen.getByTitle("componentTitle");
      expect(componentTitle).toBeInTheDocument();

      const componentTags = screen.getByText("#motif");
      expect(componentTags).toBeInTheDocument();
    });
  });

  test("ComponentsListView filter with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchComponents.mockReturnValue(mockupComponent);
    fetchTags.mockReturnValue(mockupTags);

    delete window.location;
    window.location = new URL("http://localhost:8080/components?query=button");

    render(<ComponentsListView/>);

    await waitFor(() => {
      const componentTag = screen.getAllByTitle("componentTitle");
      expect(componentTag).toHaveLength(2);
      const componentScreenshot = screen.getAllByTitle("componentScreenshot")[0];
      expect(componentScreenshot).toBeInTheDocument();
    });
  });

  test("Figma Component without Screenshot with user logged in", async() => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchComponents.mockReturnValue([mockupComponent[3]]);
    fetchTags.mockReturnValue(mockupTags);

    render(<ComponentsListView/>);

    await waitFor( () => {
      const componentScreenshot = screen.queryByTitle("componentScreenshot");
      expect(componentScreenshot).not.toBeInTheDocument();
    });
  })
});