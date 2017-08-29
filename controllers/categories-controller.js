var api = require('../src/config/api');

categoriesController = function() {
    
    get = function(req, res) {

        var request = require('request');
        var querystring = require('querystring');
        
        var id = req.params.id;
        
        var query = 'categories/' + id;

        var qs = querystring.parse(query);

        var url = api.api_url + query;

        request({url:url}, function (error, response, body) {
            if (!error && response.statusCode == 200) {                
                res.send(body);        
            }
        })
    };

    return {
        get: get
    };
};

module.exports = categoriesController();
