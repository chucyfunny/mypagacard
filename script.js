let body = $response.body;
let __body = JSON.parse(body)
__body['featureStatuses']['CUSTOMER_APP_FEATURE_VIRTUAL_PAGA_CARD_USD']=true
__body['featureStatuses']['CUSTOMER_APP_FEATURE_PHYSICAL_PAGA_CARD_USD']=true
$done({body: JSON.stringify(__body)});
