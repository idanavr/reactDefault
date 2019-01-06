const mongoose = require('mongoose');
const { Schema } = mongoose;

const enumGender = {
    values: ['male', 'female'],
    message: 'Invalid gender'
};

function nameValidator(str) {
    return (/^[0-9a-zA-Z]+(?:[ -][0-9a-zA-Z]+)*$/).test(str);
}

function emailValidator(email) {
    return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/).test(email);
}

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            maxlength: [50, 'First name is too long'],
            required: [true, 'First name is required'],
            validate: {
                validator: nameValidator,
                message: '{VALUE} is not a valid first name'
            },
        },
        lastName: {
            type: String,
            maxlength: [50, 'Last name is too long'],
            required: [true, 'Last name is required'],
            validate: {
                validator: nameValidator,
                message: '{VALUE} is not a valid last name'
            },
        },
        email: {
            type: String,
            maxlength: [100, 'Email is too long'],
            required: [true, 'Email is required'],
            unique: true,
            validate: {
                validator: emailValidator,
                message: '{VALUE} is not a valid email'
            },
        },
        password: {
            type: String,
            minlength: [6, 'Password is too short'],
            maxlength: [100, 'Password is too long'],
            required: [true, 'Password is required'],
        },
        gender: {
            type: String,
            required: [true, 'Gender is required'],
            enum: enumGender
        },
        // date: {
        //     type: Date,
        //     default: Date.now,
        // },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model('users', userSchema);