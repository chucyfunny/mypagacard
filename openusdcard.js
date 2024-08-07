let body = $response.body;
let __body = JSON.parse(body);

// 设置你想要的passcode
let passcode = "2003913";

// 提示用户输入密码
let input = prompt("请输入密码以激活脚本：");

// 检查输入的密码是否正确
if (input === passcode) {
    // 如果密码正确，激活功能
    __body['featureStatuses']['CUSTOMER_APP_FEATURE_VIRTUAL_PAGA_CARD_USD'] = true;
    __body['featureStatuses']['CUSTOMER_APP_FEATURE_PHYSICAL_PAGA_CARD_USD'] = true;
    $done({body: JSON.stringify(__body)});
} else {
    // 如果密码错误，提示用户并终止脚本执行
    console.log("密码错误。无法激活脚本。");
    $done({body: JSON.stringify(__body)});
}
