import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn function", () => {
  it("handles empty inputs", () => {
    expect(cn()).toBe("");
  });

  it("handles single class names", () => {
    expect(cn("class1")).toBe("class1");
  });

  it("merges multiple class names correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("handles conditional class names", () => {
    expect(cn("class1", false && "class2", "class3")).toBe("class1 class3");
    expect(cn(false && "class1", "class2")).toBe("class2");
  });

  it("handles Tailwind class name merging correctly", () => {
    expect(cn("p-2", "p-4")).toBe("p-4"); // p-4 should override p-2
    expect(cn("text-lg", "text-base")).toBe("text-base"); // text-base should override text-lg
  });

  it("handles a mix of true and false conditional classes", () => {
    expect(cn("class1", true && "class2", false && "class3", "class4")).toBe(
      "class1 class2 class4",
    );
  });

  it("handles nested arrays of classes", () => {
    expect(cn(["class1", ["class2", "class3"]], "class4")).toBe(
      "class1 class2 class3 class4",
    );
  });
});
