var accessToken
var getAccessToken = requestNewAccesToken

function requestNewAccesToken() {
	// request a new acces token from Microsoft
	var response = HTTP.post('https://datamarket.accesscontrol.windows.net/v2/OAuth2-13', {
		params: {
			// TODO replace with meteor.settings
			client_id: Meteor.settings.msTranslator.id,
			client_secret: Meteor.settings.msTranslator.secret,
			scope: "http://api.microsofttranslator.com",
			grant_type: 'client_credentials'
		}
	})

	// Parse the JSON response
	var responseBody = EJSON.parse(response.content)

	// retreive the actual token from the response
	accessToken = EJSON.parse(response.content).access_token

	// switch the getAccessToken function to requestNewAccesToken when the token expires
	Meteor.setTimeout(function() {
		getAccessToken = requestNewAccesToken
	}, responseBody.expires_in * 1000)

	// switch the getAccessToken function to cached version for now
	getAccessToken = getCachedAccessToken

	return accessToken
}

function getCachedAccessToken() {
	return accessToken
}

getAuthorizationHeader = function() {
	return {
		Authorization: "Bearer" + " " + getAccessToken()
	}
}