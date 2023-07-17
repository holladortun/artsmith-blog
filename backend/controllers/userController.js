//desc Get users
//@route GET /api/users
//@access public

const getUsers = (req, res) => {
  res.status(200).json({ message: "all users" });
};

//desc Get single user
//@route GET /api/users/:id
//@access public

const getUser = (req, res) => {
  res
    .status(200)
    .json({ message: `user with ${req.params.id} returned successfully` });
};

//desc Get create user
//@route GET /api/users/
//@access public

const createUser = (req, res) => {
  console.log(req.body);

  res.status(200).json({ message: `user with created successfully` });
};

//desc Get update user
//@route GET /api/users/:id
//@access public

const updateUser = (req, res) => {
  res
    .status(200)
    .json({ message: `info for ${req.params.id} patched successfully` });
};

//desc Get delete user
//@route GET /api/users/:id
//@access public

const deleteUser = (req, res) => {
  res
    .status(200)
    .json({ message: `user ${req.params.id} deleted successfully` });
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
