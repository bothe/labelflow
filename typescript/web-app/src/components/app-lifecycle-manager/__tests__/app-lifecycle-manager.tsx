/* eslint-disable import/first */
import { render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import type { Workbox } from "workbox-window";

import { mockUseQueryParams } from "../../../utils/router-mocks";

mockUseQueryParams();

import { AppLifecycleManager } from "../app-lifecycle-manager";

describe("App lifecyle manager", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Should render modal when needed", async () => {
    window.workbox = {
      getSW: jest.fn(async () => {
        return {
          state: "waiting",
        };
      }),
      addEventListener: jest.fn(() => {}),
      removeEventListener: jest.fn(() => {}),
      register: jest.fn(() => {}),
    } as unknown as Workbox;
    render(<AppLifecycleManager assumeServiceWorkerActive={false} />);
    await waitFor(() => {
      expect(screen.queryByText("image labeling tool")).toBeDefined();
    });
    await waitFor(() => {
      expect(screen.queryByText("Update available")).not.toBeInTheDocument();
    });
  });

  test("Should not render modal when not needed", async () => {
    window.workbox = {
      getSW: jest.fn(async () => {
        return {
          state: "activated",
        };
      }),
      addEventListener: jest.fn(() => {}),
      removeEventListener: jest.fn(() => {}),
      register: jest.fn(() => {}),
    } as unknown as Workbox;
    render(<AppLifecycleManager assumeServiceWorkerActive />);
    await waitFor(() => {
      expect(screen.queryByText("image labeling tool")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("Update available")).not.toBeInTheDocument();
    });
  });

  test("Should render update modal when service worker waiting", async () => {
    let timeout: number;
    window.workbox = {
      getSW: jest.fn(async () => {
        return {
          state: "activated",
        };
      }),
      addEventListener: jest.fn((eventName, callback: () => void) => {
        if (eventName === "waiting") {
          timeout = setTimeout(callback, 10) as unknown as number;
        }
      }),
      removeEventListener: jest.fn((eventName) => {
        if (eventName === "waiting") {
          clearTimeout(timeout);
        }
      }),
      register: jest.fn(() => {}),
    } as unknown as Workbox;
    render(<AppLifecycleManager assumeServiceWorkerActive />);
    await waitFor(() => {
      expect(screen.queryByText("image labeling tool")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("Update available")).toBeDefined();
    });
  });
});
