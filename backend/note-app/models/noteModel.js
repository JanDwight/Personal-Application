const mongoose = require('mongoose')

const noteModels = mongoose.Schema({
  section_name: {
    type: String,
    required: true
  },

  note_name: {
    type: String,
    required: true,
    unique: true
  },

  note_contents: String
})

module.exports = mongoose.model('Note', noteModal)