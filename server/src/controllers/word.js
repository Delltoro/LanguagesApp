import { Word , validate } from '../model/word';

module.exports = {

    getWords: async (req , res) => {
        try {
            const words = await Word.find();
            res.send(words);
        }catch(err) {
            res.status(500).send('An error occured');
        }
  
    },

    getWordById: async (req , res) => {
        try {
            const word = await Word.findById(req.params.id);
            if(!word) return res.status(404).send('Words not found');
            return res.send(word);
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    addWord: async (req , res) => {
        try {
            const { error } = validate(req.body);
           if(error) return res.status(400).send(error.details[0].message);
            const word = new Word({
                polishWord: req.body.polishWord,
                germanWord: req.body.germanWord,
            })
            await word.save();
            res.send(word);
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    deleteWord: async (req, res) => {
        try {
            const word = await Word.findByIdAndRemove(req.params.id);
            if (!word) return res.status(404).send('word not found.');
            res.send(`Document was successfuly deleted. \n${word}`);
          } catch (error) {
              res.status(500).send('An error occured.');
          }
    }


}