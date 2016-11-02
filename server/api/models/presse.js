import mongoose from 'mongoose';

const presseSchema = new mongoose.Schema({
    titre: String,
    texte: String
});

let model = mongoose.model('presse', presseSchema);

export default class presse {

    findAll(req, res) {
        model.find({}, (err, presses) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(presses);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, presse) => {
            if (err || !presse) {
                res.sendStatus(403);
            } else {
                res.json(presse);
            }
        });
    }

    create(req, res) {
        model.create({
                titre: req.body.titre,
                texte: req.body.texte
            },
            (err, presse) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(presse);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, presse) => {
            if (err || !presse) {
                res.status(500).send(err.message);
            } else {
                res.json(presse);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
