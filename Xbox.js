// set_locale.js
let headers = $request.headers;
headers['Cookie'] = headers['Cookie'].replace(/locale=.*?;/, 'locale=en-ng;'); // 强制设置为尼日利亚
$done({headers: headers});
