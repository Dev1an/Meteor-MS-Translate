Microsoft = {
	translate: translate,
	detect: detect
}

function request(path, params) {
	var response = HTTP.get('http://api.microsofttranslator.com/V2/Http.svc/' + path, {
		params: _.extend({ appId: ''}, params),
		headers: getAuthorizationHeader()
	})

	return xml2js.parseStringSync(response.content).string['_']
}

function translate(text, language) {
	return request('Translate', {
		text: text,
		to: language,
		contentType: 'text/plain'
	})
}

function detect(text) {
	return request('Detect', { text: text })
}