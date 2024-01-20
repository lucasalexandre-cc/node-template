import { helloWorld } from "@/index";

describe("Index", () => {
  describe("helloWorld", () => {
    it("returns 'Hello world!'", () => {
      expect(helloWorld()).toEqual("Hello world!");
    });
  });
});
