//importaion des dépendances
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//le modéle User
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

//plugin pour les mots de pass
userSchema.plugin(uniqueValidator);

//exportaion du module
module.exports = mongoose.model('User', userSchema);