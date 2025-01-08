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
let deleteUser = async (req, res) => {
    try {

        let deletedUser = await User.findByIdAndDelete({
            _id: req.body.userid
        })
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}
let updateUser = async (req, res) => {

    try {
        let updatedUser = await User.findByIdAndUpdate(
            {
                _id: req.body.userid
            },
            {
                useremail: req.body.email
            },
            {
                new: false
            }
        )

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export { addUser, updateUser, getAllUsers, deleteUser }