const { Schema, model } = require('mongoose');
const { linkRegExp } = require('../middlewares/validate');

const cardSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return linkRegExp.test(link);
      },
      message: 'Здесь должна быть ссылка',
    },
  },
  owner: {
    type: Object,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('card', cardSchema);
