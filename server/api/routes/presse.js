import express from 'express';
import Presse from '../models/presse.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var presse = new Presse();

    router.get('/', presse.findAll);

    router.get('/:id', presse.findById);

    router.post('/', presse.create);

    router.put('/:id', presse.update);

    router.delete('/:id', presse.delete);

    app.use('/presses', router);

};
