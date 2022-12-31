import UserSchema from "./UserSchema.js";

export const getUser = () => {
  return UserSchema.find();
};
export const postUser = (userObj) => {
  return UserSchema(userObj).save();
};
export const updateUser = (filter, userObj) => {
  return UserSchema.findOneAndUpdate(filter, userObj, { new: true });
};
export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
