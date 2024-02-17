
import { addStep, addFieldData, NEXT_STEP, ADD_FIELD } from ".";


describe("Redux actions", () => {
  it("should create an action to add a step", () => {
    const step = { id: 1, name: "Step 1" };
    const expectedAction = {
      type: NEXT_STEP,
      ...step,
    };
    expect(addStep(step)).toEqual(expectedAction);
  });

  it("should create an action to add field data", () => {
    const field = { name: "fieldName", value: "fieldValue" };
    const expectedAction = {
      type: ADD_FIELD,
      ...field,
    };
    expect(addFieldData(field)).toEqual(expectedAction);
  });
});
