import UserSchema from "./UserSchema.js"

// create

export const postUser = (userObj) => {
    return UserSchema(userObj).save()
}


//read

export const getUser = () => {
    return UserSchema.find()
}

//update

export const updateUser = (filter, userObj) => {
    return UserSchema.findOneAndUpdate(filter, userObj, {new:true})

}

//delete

export const deleteUser =(filter) => {
    return UserSchema.findOneAndDelete(filter)
}