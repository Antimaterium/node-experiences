const UserController = function UserController() {};

UserController.get = function get(req, res, next) {
    return res.status(200).send('Gets!');
};

UserController.post = function post(req, res, next) {
    res.status(201).send('Post!')
};

UserController.put = function put(req, res, next) {
    let id = req.params.id;
    return res.status(201).send(`Put! ${id}`);
};

UserController.delete = function deleteUser(req, res, next) {
    let id = req.params.id;
    return res.status(200).send(`Delete! ${id}`);
};

module.exports = UserController;