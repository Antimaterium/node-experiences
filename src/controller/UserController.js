module.exports = {
    get: (req, res, next) => res.status(200).send('Get!'),
    post: (req, res, next) => res.status(201).send('Post!'),
    put: (req, res, next) => {
        let id = req.params.id;
        res.status(201).send(`Put! ${id}`);
    },
    delete: (req, res, next) => {
        let id = req.params.id;
        res.status(200).send(`Delete! ${id}`);
    },
};