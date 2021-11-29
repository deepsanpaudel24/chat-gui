import actions from "./actions";
const initialState = {
  isFetchingMessages: false,
  allMessages: [],
  isFetchingMetaData: false,
  metaData: "",
  error: "",
};
const {
  GET_MESSAGE_BEGIN,
  GET_MESSAGE_SUCCESS,
  GET_MESSGAGE_ERROR,
  GET_METADATA_BEGIN,
  GET_METADATA_SUCCESS,
  GET_METADATA_ERROR,
} = actions;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_BEGIN:
      return {
        ...state,
        isFetchingMessages: true,
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        isFetchingMessages: false,
        allMessages: [...action.payload, ...state.allMessages],
      };
    case GET_MESSGAGE_ERROR:
      return {
        ...state,
        isFetchingMessages: false,
        error: action.payload,
      };
    case GET_METADATA_BEGIN:
      return {
        ...state,
        isFetchingMetaData: true,
      };
    case GET_METADATA_SUCCESS:
      return {
        ...state,
        isFetchingMetaData: false,
        metaData: action.payload,
      };
    case GET_METADATA_ERROR:
      return {
        ...state,
        isFetchingMetaData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
