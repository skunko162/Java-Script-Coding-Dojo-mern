const mongoose = require('mongoose');

const StaffMemberSchema = new mongoose.Schema(
    {
        firstName: {
            type: String, 
            required: [true, '{PATH} is required.'],
            minlength: [2 , '{PATH} must be at least {MINLENGTH} characters.']
        },
        lastName: {
            type: String, 
            required: [true, '{PATH} is required.'],
            minlength: [2 , '{PATH} must be at least {MINLENGTH} characters.']
        },
        specialty: {
            type: String,
            required:[true, '{PATH} is required.']
        },
        employment_start_date: {
            type: String,
            required:[true, '{PATH} is required.']
        },
        routine_area:{
            type: String, 
            required: [true, '{PATH} is required']
        },
    },
    {timestamps: true}
);


/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const StaffMember = mongoose.model("StaffMember", StaffMemberSchema);


module.exports = {StaffMember: StaffMember};