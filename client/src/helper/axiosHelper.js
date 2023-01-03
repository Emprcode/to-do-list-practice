import axios from "axios";

const apiEp = `http://localhost:8000/api/v1/task`;
export const postUser = async (userObj) => {
  try {
    const { data } = await axios.post(apiEp, userObj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
