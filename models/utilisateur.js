const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema
const utilisateurSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
})


module.exports = mongoose.model('utilisateur', utilisateurSchema, 'utilisateurs')