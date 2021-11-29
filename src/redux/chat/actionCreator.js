import axios from "axios";
import actions from "./actions";
const {
  getMessageBegin,
  getMessageSuccess,
  getMessageError,
  getMetaDataBegin,
  getMetaDataSuccess,
  getMetaDataError,
} = actions;

export const getMessagesMetaData = () => async (dispatch) => {
  try {
    dispatch(getMetaDataBegin());
    const result = await axios.get(`https://gorest.co.in/public/v1/users`);
    dispatch(getMetaDataSuccess(result.data.meta));
  } catch (err) {
    dispatch(getMetaDataError(err));
  }
};

export const getMessages = (pageNo, setLoading) => async (dispatch) => {
  try {
    dispatch(getMessageBegin());
    const result = await axios.get(
      `https://gorest.co.in/public/v1/users?page=${pageNo}`
    );
    const sortedData = result.data.data.sort((a, b) => a.id - b.id);
    dispatch(getMessageSuccess(sortedData.reverse()));
    setLoading(false);
  } catch (err) {
    dispatch(getMessageError(err));
  }
};
