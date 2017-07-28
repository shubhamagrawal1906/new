var mongoose = require("mongoose");
require('mongoose-type-email');
var AutoIncrement = require('mongoose-sequence');

var userSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    email: { type: mongoose.SchemaTypes.Email },
    password: { type: String, required: true },
    user_type: { type: Number },
    created_at: {
        type: Date,
        default: Date.now,
        setDefaultsOnInsert: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        setDefaultsOnInsert: false
    }
});


// userSchema.plugin(AutoIncrement);

module.exports = mongoose.model("User", userSchema);
