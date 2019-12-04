import { Section , validate } from '../model/vocabulary';

module.exports = {

    getSection: async (req , res) => {
        try {
            const sections = await Section.find();
            res.send(sections);
        }catch(err) {
            res.status(500).send('An error occured');
        }
  
    },

    getSectionById: async (req , res) => {
        try {
            const section = await Section.findById(req.params.id);
            if(!section) return res.status(404).send('section not found');
            return res.send(section);
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    addSection: async (req , res) => {
        try {
            console.log(req.body);
           const { error } = validate(req.body);
           if(error) return res.status(400).send(error.details[0].message);
            const section = new Section({
                section: req.body.section,
                words: req.body.words,
            })
            await section.save();

            res.send(section);
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    deleteSection: async (req, res) => {
        try {
            const section = await Section.findByIdAndRemove(req.params.id);
            if (!section) return res.status(404).send('section not found.');
            res.send(section);
          } catch (error) {
              res.status(500).send('An error occured.');
          }
    }


}