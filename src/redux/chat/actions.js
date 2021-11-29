const actions = {
  //for messages
  GET_MESSAGE_BEGIN: "GET_MESSAGE_BEGIN",
  GET_MESSAGE_SUCCESS: "GET_MESSAGE_SUCCESS",
  GET_MESSGAGE_ERROR: "GET_MESSAGE_ERROR",

  //for messages metadata
  GET_METADATA_BEGIN: "GET_METADATA_BEGIN",
  GET_METADATA_SUCCESS: "GET_METADATA_SUCCESS",
  GET_METADATA_ERROR: "GET_METADATA_ERROR",

  getMessageBegin: () => {
    return {
      type: actions.GET_MESSAGE_BEGIN,
    };
  },
  getMessageSuccess: (data) => {
    return {
      type: actions.GET_MESSAGE_SUCCESS,
      payload: data,
    };
  },
  getMessageError: (err) => {
    return {
      type: actions.GET_MESSGAGE_ERROR,
      payload: err,
    };
  },
  getMetaDataBegin: () => {
    return {
      type: actions.GET_METADATA_BEGIN,
    };
  },
  getMetaDataSuccess: (data) => {
    return {
      type: actions.GET_METADATA_SUCCESS,
      payload: data,
    };
  },
  getMetaDataError: (err) => {
    return {
      type: actions.GET_METADATA_ERROR,
      payload: err,
    };
  },
};

export default actions;
