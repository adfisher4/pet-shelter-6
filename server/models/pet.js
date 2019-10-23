const mongoose = require('mongoose');

const PetSchema = new mongoose. Schema({
    name: {
        type: String,
        required: [true, "Enter the pet's name."],
        minlength: [3, "The pet's name must be at least 3 characters long."],
    },
    type: {
        type: String,
        required: [true, "Enter the type of animal the pet is."],
        minlength: [3, "The pet's type must be at least 3 characters long."]

    }, 
    description: {
        type: String,
        required: [true, "Include a description of the pet."],
        minlength: [3, "The pet's description must be at least 3 characters long."]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true}); 
    


mongoose.model("Pet", PetSchema);
