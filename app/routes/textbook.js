// Dependencies
var mongoose  = require('mongoose');
var Textbook = require('../models/textbook');
// App routes
module.exports = function() {
    return {

        getAll : function(req, res){
            //Query the DB and if no errors, send all the textbooks
            var query = Textbook.find({});
            query.exec(function(err, textbooks){
                if(err) res.send(err);
                //If no errors, send them back to the client
                res.json(textbooks);
            });
        },

        post: function(req, res){
            //Creates a new textbook
            var newTextbook = new Textbook(req.body);
            //Save it into the DB.
            newTextbook.save(function(err){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(req.body);
            });
        },

        getOne: function(req, res){
            Textbook.findById(req.params.id, function(err, textbook){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(textbook);
            });     
        }
    }
};  