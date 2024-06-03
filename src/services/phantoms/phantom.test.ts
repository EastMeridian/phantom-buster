import Phantoms from "./phantoms";
import { generateRandomId } from "src/utils/id";
import { IPhantoms } from "src/models/phantom";

jest.mock("src/utils/id", () => ({
  generateRandomId: jest.fn(),
}));

const mockGenerateRandomId = generateRandomId as jest.Mock;

describe("Phantoms.rename", () => {
  it("should rename the phantom with the specified ID", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];
    const result = Phantoms.rename(phantoms, "1", "New Phantom 1");
    expect(result).toEqual([
      {
        id: "1",
        name: "New Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ]);
  });

  it("should not change any phantoms if the ID is not found", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];
    const result = Phantoms.rename(phantoms, "3", "New Phantom 3");
    expect(result).toEqual(phantoms);
  });
});
describe("Phantoms.rename", () => {
  it("should rename the phantom with the specified ID", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];
    const result = Phantoms.rename(phantoms, "1", "New Phantom 1");
    expect(result).toEqual([
      {
        id: "1",
        name: "New Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ]);
  });

  it("should not change any phantoms if the ID is not found", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];
    const result = Phantoms.rename(phantoms, "3", "New Phantom 3");
    expect(result).toEqual(phantoms);
  });
});

describe("Phantoms.remove", () => {
  it("should remove the phantom with the specified ID", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];

    const result = Phantoms.remove(phantoms, "1");
    expect(result).toEqual([
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ]);
  });

  it("should not remove any phantoms if the ID is not found", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];

    const result = Phantoms.remove(phantoms, "3");
    expect(result).toEqual(phantoms);
  });
});

describe("Phantoms.rename", () => {
  it("should rename the phantom with the specified ID", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];
    const result = Phantoms.rename(phantoms, "1", "New Phantom 1");
    expect(result).toEqual([
      {
        id: "1",
        name: "New Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ]);
  });

  it("should not change any phantoms if the ID is not found", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];
    const result = Phantoms.rename(phantoms, "3", "New Phantom 3");
    expect(result).toEqual(phantoms);
  });
});

describe("Phantoms.duplicate", () => {
  it("should duplicate the phantom with the specified ID", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];
    mockGenerateRandomId.mockReturnValue("3");

    const result = Phantoms.duplicate(phantoms, "1");
    expect(result).toEqual([
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "3",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ]);
  });

  it("should not duplicate any phantoms if the ID is not found", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];

    const result = Phantoms.duplicate(phantoms, "3");
    expect(result).toEqual(phantoms);
  });
});

describe("Phantoms.remove", () => {
  it("should remove the phantom with the specified ID", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];

    const result = Phantoms.remove(phantoms, "1");
    expect(result).toEqual([
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ]);
  });

  it("should not remove any phantoms if the ID is not found", () => {
    const phantoms: IPhantoms = [
      {
        id: "1",
        name: "Phantom 1",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
      {
        id: "2",
        name: "Phantom 2",
        script: "",
        manifest: { tags: { categories: [] } },
        launchType: "manually",
      },
    ];

    const result = Phantoms.remove(phantoms, "3");
    expect(result).toEqual(phantoms);
  });
});
