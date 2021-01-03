const { ReadPreference } = require('mongodb');
const mongoose = require('mongoose');
const { schema } = require('./task');
const task = require('./task');

const listSchema  = new Schema({
    userId: {
        type:schema.Types.objectId
        ref: 'task'
    },
    title:{
        type:String,
        required:true
    },
    complete:{
    type:Boolean,
    required:true
}
});
