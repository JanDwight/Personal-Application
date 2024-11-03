const mongoose = require('mongoose')

const projectModel = mongoose.Schema({
    user_id: {
        type: Number,
        required: false
    },

    project_name: {
      type: String,
      required: [true, "Please add the project name."],
      unique: false
    },

    section: {
      section_name: {
        type: String,
        required: true,
        unique: true
      }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectModel)