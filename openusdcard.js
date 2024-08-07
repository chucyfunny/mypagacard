/**
 * @name Paga Features Unlocker
 * @description This script unlocks certain features in the Paga app by modifying the API response.
 * @version 1.0.0
 * @match https://www.mypaga.com/paga-webservices/customer-mobile/secured/getUserData/v3
 */

let body = $response.body;
let __body = JSON.parse(body);

__body['featureStatuses']['CUSTOMER_APP_FEATURE_VIRTUAL_PAGA_CARD_USD'] = true;
__body['featureStatuses']['CUSTOMER_APP_FEATURE_PHYSICAL_PAGA_CARD_USD'] = true;

$done({body: JSON.stringify(__body)});
