/**
 * Property-based tests for useMotionVariants hook.
 *
 * **Validates: Requirements 15.5**
 *
 * Property 2: Reduced-motion disables all motion in animation variants
 * - When useReducedMotion returns true, fadeUp.hidden has opacity: 1 and y: 0
 */
import fc from "fast-check";
import { renderHook } from "@testing-library/react";

// Mock framer-motion so useReducedMotion can be controlled in tests
vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  return {
    ...actual,
    useReducedMotion: vi.fn(),
  };
});

import * as framerMotion from "framer-motion";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

test("when reduced motion is true, fadeUp hidden state has no movement", () => {
  vi.mocked(framerMotion.useReducedMotion).mockReturnValue(true);
  fc.assert(
    fc.property(fc.constant(null), () => {
      const { result } = renderHook(() => useMotionVariants());
      const hidden = result.current.fadeUp.hidden as { opacity: number; y: number };
      expect(hidden.opacity).toBe(1);
      expect(hidden.y).toBe(0);
    }),
    { numRuns: 100 }
  );
  vi.restoreAllMocks();
});
