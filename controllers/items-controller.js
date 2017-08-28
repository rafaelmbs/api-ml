var api = require('../src/config/api');

itemsController = function() {
    
    getItem = function(req, res) {

        var request = require('request');
        var querystring = require('querystring');
        
        var id = req.params.id;
        
        var query = 'items/' + id;

        var qs = querystring.parse(query);

        var url = api.api_url + query;

        request({url:url}, function (error, response, body) {
            if (!error && response.statusCode == 200) {                
                res.send(body);        
            }
        })
    };

    getItemDescription = function(req, res) {
        
        var request = require('request');
        var querystring = require('querystring');
        
        var id = req.params.id;
        
        var query = 'items/' +  id + '/description';

        var qs = querystring.parse(query);

        var url = api.api_url + query;

        request({url:url}, function (error, response, body) {
            if (!error && response.statusCode == 200) {                
                res.send(body);        
            }
        })
    };

    return {
        getitem: getItem,
        getdescription: getItemDescription
    };
};

module.exports = itemsController();
