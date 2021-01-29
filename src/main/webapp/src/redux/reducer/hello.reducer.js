import { HELLO_SET } from "../action/hello.action";

const initialHelloState = {};

export default (state = initialHelloState, action) => {
  switch (action.type) {
    case HELLO_SET:
      return {
        ...state,
        world: action.payload,
      };
    default:
      return state;
  }
};
