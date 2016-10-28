import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
  texte1: String,
  texte2: String,
  texte3: String,
  texte4: String,
  texte5: String,
  texte6: String,
  texte7: String,
  texte8: String,
  texte9: String,
  texte10: String,
  texte11: String,
  texte12:String
});

let model = mongoose.model('Stat', statSchema);

export default class Stat {

    findAll(req, res) {
        model.find({}, (err, stats) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(stats);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, stat) => {
            if (err || !stat) {
                res.sendStatus(403);
            } else {
                res.json(stat);
            }
        });
    }

    create(req, res) {
        model.create({
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3,
                texte4: req.body.texte4,
                texte5: req.body.texte5,
                texte6: req.body.texte6,
                texte7: req.body.texte7,
                texte8: req.body.texte8,
                texte9: req.body.texte9,
                texte10: req.body.text10,
                texte11: req.body.texte11,
                texte12: req.body.texte12
            },
            (err, stat) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(stat);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3,
                texte4: req.body.texte4,
                texte5: req.body.texte5,
                texte6: req.body.texte6,
                texte7: req.body.texte7,
                texte8: req.body.texte8,
                texte9: req.body.texte9,
                texte10: req.body.text10,
                texte11: req.body.texte11,
                texte12: req.body.texte12
        }, (err, stat) => {
            if (err || !stat) {
                res.status(500).send(err.message);
            } else {
                res.json(stat);
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
