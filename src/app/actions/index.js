export const NEXT_STEP = "NEXT_STEP";

export function addStep(step) {debugger
  return { type: NEXT_STEP, ...step };
}