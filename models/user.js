/**
 * Created by lekanterragon on 1/27/17.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
   name : String,
   age : Number,
   email : String
});

module.exports = mongoose.model('User', UserSchema);