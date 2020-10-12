module.exports = {
  devServer: {
    port: 8026,
    proxy: {
      '/api': { // 此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
        target: process.env.VUE_APP_API_BASE_URL,
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  }
}
