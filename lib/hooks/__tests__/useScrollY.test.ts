/**
 * Property-based tests for useScrollY hook.
 *
 * **Validates: Requirements 4.2, 4.3**
 *
 * Property 1: Scroll threshold produces correct boolean
 * - For any scrollY > 60, useScrollY(60) returns true
 * - For any scrollY <= 60, useScrollY(60) returns false
 */
import { describe, test, expect } from "vitest";
import fc from "fast-check";
import { renderHook, act } from "@testing-library/react";
import { useScrollY } from "@/lib/hooks/useScrollY";

describe("useScrollY", () => {
  test("Property 1: returns true for any scrollY > threshold, false for scrollY <= threshold", () => {
    // Sub-assertion 1: scrollY > 60 → true
    fc.assert(
      fc.property(fc.integer({ min: 61, max: 100_000 }), (scrollY) => {
        Object.defineProperty(window, "scrollY", {
          value: scrollY,
          configurable: true,
        });
        const { result } = renderHook(() => useScrollY(60));
        expect(result.current).toBe(true);
      }),
      { numRuns: 100 }
    );

    // Sub-assertion 2: scrollY <= 60 → false
    fc.assert(
      fc.property(fc.integer({ min: -1000, max: 60 }), (scrollY) => {
        Object.defineProperty(window, "scrollY", {
          value: scrollY,
          configurable: true,
        });
        const { result } = renderHook(() => useScrollY(60));
        expect(result.current).toBe(false);
      }),
      { numRuns: 100 }
    );
  });
});
