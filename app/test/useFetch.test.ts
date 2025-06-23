import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "../customHooks/useFetch";
import { jest } from "@jest/globals";

describe("useFetch Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              commit: {
                committer: {
                  date: "2025-06-23T05:06:48Z",
                },
              },
            },
          ]),
      } as Response)
    );
  });

  it("initial states", () => {
    const { result } = renderHook(() => useFetch(""));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.errorStatus).toBe(null);
    expect(result.current.fetchedData).toBe(null);
  });

  it("successful get data", async () => {
    const url = "https://api.github.com/repos/Aivanii/Punk_Forum/commits";

    const { result } = renderHook(() => useFetch(url));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.fetchedData).not.toBeNull();
      expect(result.current.errorStatus).toBeNull();
    });

    expect(result.current.fetchedData[0].commit.committer.date).toBe(
      "2025-06-23T05:06:48Z"
    );
  });

  it("Network request fail", async () => {
    const errorMessage = "Network request failed";

    global.fetch = jest.fn(() => Promise.reject(new Error(errorMessage)));

    const url = "invalid-url-for-test";

    const { result } = renderHook(() => useFetch(url));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.fetchedData).toBeNull();
      expect(result.current.errorStatus).toBe(errorMessage);
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url, undefined);
  });

  it("should pass headers to fetch", async () => {
    const headers = {
      Authorization: "Bearer token",
      "Content-Type": "application/json",
    };

    const url = "api/data";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
        headers: new Headers(),
        status: 200,
      } as unknown as Response)
    );

    renderHook(() => useFetch(url, { headers }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        url,
        expect.objectContaining({ headers })
      );
    });
  });
});
