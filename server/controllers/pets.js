const mongoose = require('mongoose');
require('../models/pet');
const Pet = mongoose.model('Pet');

module.exports = {
    index: (req, res) => {
        Pet.find().sort({type: 1})
        .then(pets => res.json({results: pets}))
        .catch(err => res.json({errors: err.errors}));
    },
    add: (req, res) => {
        Pet.create(req.body)
            .then(pets => res.json({results: pets}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req, res) => {
        Pet.findOne({_id: req.params.id})
        .then(pets => res.json({results: pets}))
        .catch(err => res.json({errors: err.errors}));
    },
    edit: (req, res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
            .then(pet => res.json({results: pet}))
            .catch(err => res.json({errors: err.errors}));
    },
    delete: (req, res) => {
        Pet.remove({_id: req.params.id})
        .then(pets => res.json({results: pets}))
        .catch(err => res.json({errors: err.errors}));
    },
    like: (req, res) => {
        Pet.findOneAndUpdate({_id: req.params.id},{ $inc: { "likes" : 1}})
            .then(pet => res.json({results: pet}))
            .catch(err => res.json({errors: err.errors}));
    }
    
}
