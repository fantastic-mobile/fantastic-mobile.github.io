export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // 重定向到子站点
    if (url.pathname.startsWith('/pro-example')) {
      url.hostname = 'fantastic-mobile-pro-example.pages.dev'
      return fetch(url.toString(), request)
    }

    // 其他路径处理
    return env.ASSETS.fetch(request)
  },
}
