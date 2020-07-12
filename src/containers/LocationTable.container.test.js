import React from "react";
import { screen } from "@testing-library/react";

import { initialState, renderWithStore } from "../utils/testUtils";
import { LocationTableContainer } from "./LocationTable.container";

describe("Location Table Container", () => {
  let store;

  beforeEach(() => {
    const locationDataRows = [
      {
        id: "another ID",
        name: "McDonald's",
        latitude: "44.9213",
        longitude: "-74.89021",
      },
      {
        id: "an ID",
        name: "Wendy's",
        latitude: "39.53255",
        longitude: "-83.44526",
      },
    ];
    const state = { ...initialState, locationData: { data: locationDataRows } };

    const wrapper = renderWithStore(<LocationTableContainer />, state);
    store = wrapper.store;
  });

  it("displays the expected location info", () => {
    const locationNameHeader = screen.getByText("City Found");

    expect(locationNameHeader).toBeInTheDocument();
  });

  it("displays the expected id info", () => {
    const idNameHeader = screen.getByText("# of IDs matched");

    expect(idNameHeader).toBeInTheDocument();
  });

  it.skip("displays the expected latitude info", () => {
    // Limitation to be discussed
  });

  it.skip("displays the expected longitude info", () => {
    // Limitation to be discussed
  });

  it.skip("displays the expected city info", async () => {
    // Limitation to be discussed
  });
});
