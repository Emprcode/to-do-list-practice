import axios from 'axios'

const apiEp= `http://localhost:8000/users`
export const postUser = async(userObj) => {
    try {
        const result = await axios.post(apiEp, userObj)

        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
   
}