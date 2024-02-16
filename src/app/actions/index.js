export const NEXT_STEP = "NEXT_STEP";
export const ADD_FIELD = "ADD_FIELD";

export function addStep(step) {
  return { type: NEXT_STEP, ...step };
}

export const addFieldData = (field) => {
  return { type: ADD_FIELD, ...field }
}