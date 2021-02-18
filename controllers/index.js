const {Joke} = require('../models')
class Controller {
    static getQuestion(req, res){
        Joke.findOne({where:{id:Math.ceil(Math.random()*40)}})
        .then((question) => {
            res.status(200).json(question)
        }).catch((err) => {
            res.status(400).json(err)
        });
    }
}

module.exports = Controller