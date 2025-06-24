import { Schema, model } from 'mongoose'

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
        minLength: [4, "Make should be at least 4 chars long"]
    },
    model: {
        type: String,
        required: true,
        minLength: [4, "Model should be at least 4 chars long"]
    },
    year: {
        type: Number,
        required: true,
        min: [1950, 'Year cant be lower than 1950'],
        max: [2050, 'year cannot be higher than 2050']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'description should be at least 10 chars long']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price shoudl be a positive num']
    },
    img: {
        type: String,
        required: [true, 'img field is required'],
        validate: [/^https?:\/\//, 'invalid image url']
    },
    material: {
        type: String
    }
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;