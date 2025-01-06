
let addUser = (req, res) => {

}
let getAllUsers = (req, res) => {
    let users = [{
        name: "Ashish",
        city: "BSL"
    }, {
        name: "Seth",
        city: "Jal"
    }]

    res.status(200).json(users)
}
let deleteUser = (req, res) => { }
let updateUser = (req, res) => { }

export { addUser, updateUser, getAllUsers, deleteUser }