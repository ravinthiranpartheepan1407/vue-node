const mongoose = require('mongoose');
const VueSchema = new mongoose.Schema({
  content: String,
  author: String
})

module.exports = mongoose.model('vue', VueSchema)
