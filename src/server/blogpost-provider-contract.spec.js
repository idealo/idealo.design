import { Verifier } from "@pact-foundation/pact";
import path from "path";
import { app } from "./server";
import {Blog} from "./models/Blog";
import "@testing-library/jest-dom/extend-expect";
import {
  mockedArchivedBlogpost,
  mockedBlogpost,
  mockedUpdatedBlogpost,
} from "../ui/pages/BlogPage/consumer-contract.spec";

jest.mock("./models/Blog", () => {
  return {
    fetchAllBlogposts: jest.fn(),
    updateBlogpost: jest.fn(),
    archiveSingleBlogpost: jest.fn(),
    fetchAllBlogpostsByCategorySlug: jest.fn(),
    fetchAllCategories: jest.fn(),
    fetchSingleBlogpost: jest.fn(),
    deleteSingleBlogpost: jest.fn(),
  };
});

const distinctCategories = {
  categorydisplayvalue: "Testing Category",
  categoryslug: "testing-category",
};

describe("Pact Verification", () => {
  const server = app.listen(6666, "0000", () =>
    console.log("server running for api testing")
  );

  test("should validate the expectations of our consumer", () => {
    Blog.fetchAllBlogposts.mockReturnValue([mockedBlogpost, mockedBlogpost, mockedBlogpost]);
    Blog.updateBlogpost.mockReturnValue(mockedUpdatedBlogpost);
    Blog.fetchSingleBlogpost.mockReturnValue([mockedBlogpost]);
    Blog.fetchAllBlogpostsByCategorySlug.mockReturnValue(mockedBlogpost);
    Blog.archiveSingleBlogpost.mockReturnValue(mockedArchivedBlogpost);
    Blog.fetchAllCategories.mockReturnValue([
      distinctCategories,
      distinctCategories,
      distinctCategories,
      distinctCategories,
    ]);
    Blog.deleteSingleBlogpost.mockReturnValue("successfully deleted blogpost");

    const opts = {
      provider: "BlogTestingProvider",
      providerBaseUrl: "http://localhost:6666",
      // pactBrokerUrl: process.env.PACT_BROKER_URL,
      //  pactBrokerToken: process.env.PACT_BROKER_TOKEN,
      pactUrls: [
        path.resolve(
          process.cwd(),
          "src/__tests__/pact/blogtestingconsumer-blogtestingprovider.json"
        ),
      ],
      publishVerificationResult: true,
      providerVersion: "1.0.0",
      logLevel: "INFO",
    };

    return new Verifier(opts)
      .verifyProvider()
      .then((output) => {
        server.close();
        console.log("pact verification complete !");
        console.log(output);
      })
      .catch((error) => {
        server.close();
        fail(error);
      });
  });
});