import { fetchUserInfo } from "../ui/pages/BlogPage/data";
import { fetchSingleComponent } from "../ui/pages/LibraryPage/component_data";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { ComponentsDetailView } from "../ui/pages/LibraryPage/ComponentsDetailView";

jest.mock("../ui/pages/BlogPage/data", () => {
  return { fetchUserInfo: jest.fn() };
});

jest.mock("../ui/pages/LibraryPage/component_data", () => {
  return { fetchSingleComponent: jest.fn() };
});

describe("test detailView", () => {
  const mockupComponentWithMotifUiAndFigma = {
    component_id: 1,
    title: "button",
    screenshots: [1, 2, 3],
    tags: ["motif", "button", "figma"],
    readme: {
      order: ["Motif UI `button`", "Installation", "Usage"],
      content: {
        Usage: {
          body: "import { Button } from '@motif/button';",
          head: "## Usage",
        },
        Installation: {
          body: "yarn add @motif/button",
          head: "## Installation",
        },
        "Motif UI `button`": { body: "", head: "# Motif UI `button`" },
      },
    },
    figma_usage: [{
      headline: "Definition",
      content: "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action.",
      table: [{"rowNr": 0, "rowValues": ["Sizing", "Our buttons come in 3 sizes: S (hight 30px), M (hight 40px), L (hight 50px). The buttons width changes according to the text lenght. The text has margins, left and right, of 15px, 20px, 30px according to the button size. In mobile viewports, from 599px and below, the button width equals the viewport width minus the margins. Max width of the buttons, in general, is, therefore, 569px. The min buttons width is 120px, 130px, 150px according to the button size. This is also valid for modals."]}]
    }]
  };

  const mockupComponentWithMotifUi = {
    component_id: 2,
    title: "feedback",
    screenshots: [1, 2, 3],
    tags: ["motif", "feedback",],
    readme: {
      order: ["Motif UI `feedback`", "Installation", "Usage"],
      content: {
        Usage: {
          body: "import {InlineBanner} from '@motif/feedback';",
          head: "## Usage",
        },
        Installation: {
          body: "yarn add @motif/feedback",
          head: "## Installation",
        },
        "Motif UI `feedback`": { body: "", head: "# Motif UI `feedback`" },
      },
    },
  }

  const mockupComponentWithFigma = {
    component_id: 3,
    title: "Badges",
    tags: ["badges", "figma"],
    figma_usage: [{
      headline: "Definition",
      content: "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action.",
      table: [{"rowNr": 0, "rowValues": ["Sizing", "Our buttons come in 3 sizes: S (hight 30px), M (hight 40px), L (hight 50px). The buttons width changes according to the text lenght. The text has margins, left and right, of 15px, 20px, 30px according to the button size. In mobile viewports, from 599px and below, the button width equals the viewport width minus the margins. Max width of the buttons, in general, is, therefore, 569px. The min buttons width is 120px, 130px, 150px according to the button size. This is also valid for modals."]}]
    }]
  }

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

  const linksMotifUiAndFigma = ["Design", "Installation", "Usage", "Figma"];
  const linksMotifUi = ["Design", "Installation", "Usage"];
  const linksFigma = ["Figma"];

  const mockedParamsMotifUiAndFigma = {
    match: { params: { slug: "button" } },
  };
  const mockedParamsMotifUi = {
    match: { params: { slug: "feedback" } },
  };
  const mockedParamsFigma = {
    match: { params: { slug: "Badges" } },
  };

  test("ComponentDetailView gets rendered for a MotifUi and Figma with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchSingleComponent.mockReturnValue(mockupComponentWithMotifUiAndFigma);

    render(<ComponentsDetailView {...mockedParamsMotifUiAndFigma} />);

    await waitFor(() => {
      const componentTitle = screen.getByTitle(mockupComponentWithMotifUiAndFigma.title);
      expect(componentTitle).toBeInTheDocument();

      let counter = 0;
      for (const link of linksMotifUiAndFigma) {
        counter++;
        expect(screen.getByTitle(link).closest("a")).toHaveAttribute(
          "href",
          "#" + link
        );
      }
      if(counter !== linksMotifUiAndFigma.length){
        expect(fail("The linksArray has a length of " + counter + ' instead of ' + linksMotifUiAndFigma.length));
      }

      const buttonToBitbucket = screen.getByTitle("buttonToBitbucket");
      expect(buttonToBitbucket).toBeInTheDocument();
      expect(screen.getByTitle("linkToBitbucket").closest("a")).toHaveAttribute(
        "href",
        "https://code.eu.idealo.com/projects/SFECO/repos/motif-ui/browse/src/button/src/"
      );
    });
  });

  test("ComponentDetailView gets rendered for a MotifUi with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchSingleComponent.mockReturnValue(mockupComponentWithMotifUi);

    render(<ComponentsDetailView {...mockedParamsMotifUi} />);

    await waitFor(() => {
      const componentTitle = screen.getByTitle(mockupComponentWithMotifUi.title);
      expect(componentTitle).toBeInTheDocument();

      for (const link of linksMotifUi) {
        expect(screen.getByTitle(link).closest("a")).toHaveAttribute(
            "href",
            "#" + link
        );
      }

      const buttonToBitbucket = screen.getByTitle("buttonToBitbucket");
      expect(buttonToBitbucket).toBeInTheDocument();
      expect(screen.getByTitle("linkToBitbucket").closest("a")).toHaveAttribute(
          "href",
          "https://code.eu.idealo.com/projects/SFECO/repos/motif-ui/browse/src/feedback/src/"
      );
    });
  });

  test("ComponentDetailView gets rendered for a Figma with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchSingleComponent.mockReturnValue(mockupComponentWithFigma);

    render(<ComponentsDetailView {...mockedParamsFigma} />);

    await waitFor(() => {
      const componentTitle = screen.getByTitle(mockupComponentWithFigma.title);
      expect(componentTitle).toBeInTheDocument();

      for (const link of linksFigma) {
        expect(screen.getByTitle(link).closest("a")).toHaveAttribute(
            "href",
            "#" + link
        );
      }
    });
  });

  test("ComponentDetailView for Usage gets rendered with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchSingleComponent.mockReturnValue(mockupComponentWithMotifUiAndFigma);
    Object.defineProperty(window, "location", {
      get() {
        return { href: "#Usage" };
      },
    });
    render(<ComponentsDetailView {...mockedParamsMotifUiAndFigma} />);

    await waitFor(() => {
      expect(screen.getByText(mockupComponentWithMotifUiAndFigma.readme.content.Usage.body));
      expect(screen.getByTitle("copyUsage")).toBeInTheDocument();
    });
  });

  test("ComponentDetailView for Installation gets rendered with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchSingleComponent.mockReturnValue(mockupComponentWithMotifUiAndFigma);
    Object.defineProperty(window, "location", {
      get() {
        return { href: "#Installation" };
      },
    });
    render(<ComponentsDetailView {...mockedParamsMotifUiAndFigma} />);

    await waitFor(() => {
      expect(
        screen.getByText(mockupComponentWithMotifUiAndFigma.readme.content.Installation.body)
      );
      expect(screen.getByTitle("copyInstallation")).toBeInTheDocument();
    });
  });

  test("ComponentDetailView for Design gets rendered with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchSingleComponent.mockReturnValue(mockupComponentWithMotifUiAndFigma);
    Object.defineProperty(window, "location", {
      get() {
        return { href: "#Design" };
      },
    });
    render(<ComponentsDetailView {...mockedParamsMotifUiAndFigma} />);

    await waitFor(() => {
      for (const screenshot of mockupComponentWithMotifUiAndFigma.screenshots) {
        expect(screen.getByTitle(screenshot).closest("img")).toHaveAttribute(
          "src",
          "https://917999261651-idealo-design-assets.s3.eu-central-1.amazonaws.com/" +
            screenshot
        );
      }
    });
  });

  test("ComponentDetailView for Figma gets rendered with user logged in", async () => {
    fetchUserInfo.mockReturnValue(userInfo);
    fetchSingleComponent.mockReturnValue(mockupComponentWithMotifUiAndFigma);
    Object.defineProperty(window, "location", {
      get() {
        return { href: "#Figma" };
      },
    });
    render(<ComponentsDetailView {...mockedParamsMotifUiAndFigma} />);

    await waitFor(() => {
      expect(
          screen.getByText(mockupComponentWithMotifUiAndFigma.figma_usage[0].headline),
      );
      expect(
          screen.getByText(mockupComponentWithMotifUiAndFigma.figma_usage[0].content)
      );
      expect(
          screen.getByText(mockupComponentWithMotifUiAndFigma.figma_usage[0].table[0].rowValues[0])
      );
      expect(
          screen.getByText(mockupComponentWithMotifUiAndFigma.figma_usage[0].table[0].rowValues[1])
      );
    });
  });
});
