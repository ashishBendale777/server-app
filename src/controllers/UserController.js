import { User } from "../models/UserSchema.js"



let addUser = async (req, res) => {

    try {
        const addedUser = await User.create(req.body)
        res.status(200).json(addedUser)
    } catch (error) {
        res.status(500).json(error)
    }
    console.log("DATA", req.body);

}
let getAllUsers = async (req, res) => {

    try {
        let userData = await User.find()

        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error)
    }

}
let deleteUser = (req, res) => { }
let updateUser = (req, res) => { }

export { addUser, updateUser, getAllUsers, deleteUser }