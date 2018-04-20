let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {

	console.log(event);
	let productId = event.pathParameters['id'];
	let resp = {
		"statusCode": 200,
		"headers": {
			"headerName": "headerValue"
		},
		"body": JSON.stringify({id: productId, name: 'xyz'})
	};
	callback(null, resp);
}