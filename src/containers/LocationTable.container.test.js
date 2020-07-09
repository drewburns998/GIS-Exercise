import React from "react";
import { screen } from "@testing-library/react";

import { initialState, renderWithStore } from "../utils/testUtils";
import { LocationTableContainer } from "./LocationTable.container";

describe("Location Table Container", () => {
  let store;

  beforeEach(() => {
    const locationDataRows = [
      {
        name: "McDonald's",
        latitude: "44.9213",
        longitude: "-74.89021",
        city: "anytown1",
      },
      {
        name: "Wendy's",
        latitude: "39.53255",
        longitude: "-83.44526",
        city: "anytown2",
      },
    ];
    const state = { ...initialState, locationData: locationDataRows };

    const wrapper = renderWithStore(<LocationTableContainer />, state);
    store = wrapper.store;
  });

  it("displays the expected location info", () => {
    const locationNameHeader = screen.getByText("Location Name");
    const locationValue1 = screen.getByText("McDonald's");
    const locationValue2 = screen.getByText("Wendy's");

    expect(locationNameHeader).toBeInTheDocument();
    expect(locationValue1).toBeInTheDocument();
    expect(locationValue2).toBeInTheDocument();
  });

  it("displays the expected latitude info", () => {
    const latitudeHeader = screen.getByText("Latitude");
    const latitudeValue1 = screen.getByText("44.9213");
    const latitudeValue2 = screen.getByText("39.53255");

    expect(latitudeHeader).toBeInTheDocument();
    expect(latitudeValue1).toBeInTheDocument();
    expect(latitudeValue2).toBeInTheDocument();
  });

  it.skip("displays the expected longitude info", () => {
    // Limitation to be discussed
  });

  it.skip("displays the expected city info", async () => {
    // Limitation to be discussed
  });
});
