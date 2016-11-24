// Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Defines the superhero schema
var TextbookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    edition: {type: String, required: true},
    isbn: {type: String, required: true},
    link: {type: String, required: true},
    cover: {type: Schema.Types.Mixed, required: true},
    createdAt: {type: Date, default: Date.now},    
});

// Sets the createdAt parameter equal to the current time
TextbookSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

// Exports the SuperheroSchema for use elsewhere.
module.exports = mongoose.model('textbook', TextbookSchema);