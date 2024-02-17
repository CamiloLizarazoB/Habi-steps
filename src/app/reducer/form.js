import { ADD_FIELD, NEXT_STEP } from "../actions";

const initialValue = {
  step: 1,
  formFields: {},
};

const formData = (state = initialValue, action) => {
  const { type, ...field } = action
  switch (type) {
    case NEXT_STEP:
      return {
        ...action,
        step: state.step + 1,
      };
    case ADD_FIELD:
      return {
        formFields: {
          ...state.formFields,
          ...field
        },
        step: state.step + 1,
      };
    default:
      return state;
  }
};

export default formData;
