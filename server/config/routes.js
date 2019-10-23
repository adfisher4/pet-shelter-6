const mongoose = require('mongoose'),
Pet = mongoose.model('Pet'),
pets = require('../controllers/pets')

module.exports = (app) => {
    app.get('/api/pets', (req, res) => pets.index(req, res));
    app.post('/api/add/pet', (req, res) => {pets.add(req, res)});
    app.get('/api/pet/:id', (req, res) => pets.show(req, res));
    app.put('/api/update/:id', (req, res) => pets.edit(req, res));
    app.delete('/api/adopt/:id', (req, res) => pets.delete(req, res));
    app.put('/api/like/:id', (req, res) => pets.like(req, res));
    
}