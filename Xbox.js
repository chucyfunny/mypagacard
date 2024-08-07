// prevent_redirect.js

// 获取响应的 body
let body = $response.body;

// 检查是否有重定向到美国的指示
let redirectToUS = body.includes("redirected_to_us");

// 如果存在重定向到美国的标志，我们可以修改响应或返回错误
if (redirectToUS) {
    // 例如，直接返回错误，阻止重定向
    $done({
        status: "HTTP/1.1 403 Forbidden",
        body: "Redirection to US is blocked."
    });
} else {
    // 否则正常返回响应
    $done({body});
}
