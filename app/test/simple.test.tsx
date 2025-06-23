import { renderHook } from "@testing-library/react";
import { expect } from "chai";
import { describe, it } from "node:test";
//Change later
import useFetch from "/home/aivani/Projects/Punk_Forum/app/customHooks/useFetch.ts";
const mockFetch = async (): Promise<Response> => ({
  ok: true,
  json: async () => ({}),
  text: async () => "",
  status: 200,
  statusText: "OK",
} as Response);

describe("useFetch", () => {
  it("should return initial values", () => {
    const {result} = renderHook(() => useFetch(""));
  });
});