var mangoose = require('mongoose');

var Schema = mangoose.Schema;

var Genre = new Schema({
    name : {type : String, required: true,maxlength:100},
});

Genre
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mangoose.model('Genre', Genre);