import { NEXT_STEP } from "../actions";

const initialValue = {
  step: 1,
  formFields: {
    name: "",
    email: "",
  },
};

const formData = (state = initialValue, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...action,
        step: state.step + 1,
      };
    default:
      return state;
  }
};

export default formData;
