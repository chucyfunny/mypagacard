(function() {
    // 保存原始的 fetch 方法
    const originalFetch = window.fetch;

    // 重写 fetch 方法
    window.fetch = async function(url, options) {
        // 检查是否为目标 URL
        if (url.includes("https://cart.production.store-web.dynamics.com/cart/v1.0/cart/loadCart?cartType=consumer&appId=StoreWeb")) {
            // 如果存在请求体，则解析并修改它
            if (options && options.body) {
                try {
                    let payload = JSON.parse(options.body);

                    // 修改 payload 中的 locale 和 market
                    payload.locale = "en-ng";
                    payload.market = "NG";

                    // 将修改后的 payload 重新设置回请求体
                    options.body = JSON.stringify(payload);
                } catch (e) {
                    console.error("Failed to modify request payload:", e);
                }
            }
        }

        // 继续原始的 fetch 请求
        return originalFetch(url, options);
    };
})();
