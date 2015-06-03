function translate(text, language) {
	var response = HTTP.get('http://api.microsofttranslator.com/V2/Ajax.svc/Translate', {
		params: {
			text: text,
			to: language,
			contentType: 'text/plain',
			appId: ''
		},
		headers: getAuthorizationHeader()
	})

	return EJSON.parse(response.content)
}

console.log(translate("Do you have a cowboy hat?", "en"))