//comments here just for better understanding how testing library works for myself (Aivanii)

// Add custom Jest matchers
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  } as Response)
);
