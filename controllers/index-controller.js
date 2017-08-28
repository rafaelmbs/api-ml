var api = require('../src/config/api');

metarController = function() {
    
    get = function(req, res) {
        
        var request = require('request');
        var querystring = require('querystring');
        var countryCode = api.country_code;
        
        var query = req.params.query;        
        var q = 'sites/'+ countryCode + '/search?q=' + query;
        var qs = querystring.parse(q);

        var url = api.api_url + q;

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

module.exports = metarController();
