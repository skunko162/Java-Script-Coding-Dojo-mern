const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema(
    {
        location: {
            type: String, 
            required: [true, '{PATH} is required.'],
            minlength: [2 , '{PATH} must be at least {MINLENGTH} characters.']
        },
        description: {
            type: String, 
            required: [true, '{PATH} is required.'],
            minlength: [5 , '{PATH} must be at least {MINLENGTH} characters.']
        },
        src: {
            type: String,
            requried:[true, '{PATH} is required.']
        },
        srcType: {
            type: String,
            requried:[true, '{PATH} is required.']
        },
        winter: {
            type: Boolean,
            default: false
        },
        summer: {
            type: Boolean,
            default: false
        },
        spring: {
            type: Boolean,
            default: false
        },
        fall: {
            type: Boolean,
            default: false
        },
    },
    {timestamps: true}
);


/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Destination = mongoose.model("Destination", DestinationSchema);


module.exports = {Destination: Destination};