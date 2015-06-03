# Installation

Add the atmosphere package to your app: `meteor add devian:mstranslate`

Use the followng `settings.json` file with your app:

```js
{
  ...
  "msTranslator": {
    "id": "<client_id>",
    "secret": "<client_secret>"
  }
  ...
}
```

# Usage

To translate some text, use the `Microsoft.translate` function. It takes 2 arguments:
- `text`: a String you want to translate
- `language`: the language you want to translate the text to

### Example: 

```js
Microsoft.translate("Hello world", "nl")
```
returns
```js
'Hallo mensen'
```
