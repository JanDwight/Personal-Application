const mongoose = require('mongoose')

const projectModel = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    project_name: {
      type: String,
      required: [true, "Please add the project name."],
      unique: false
    },

    section: {
      section_name: {
        type: String,
        required: false,
        unique: false
      }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectModel)