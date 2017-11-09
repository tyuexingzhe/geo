const APIV1 = '/api'
const APIV2 = '/api'

module.exports = {
  name: 'OpenGMS',
  prefix: 'antdAdmin',
  footerText: 'GeoServer Admin  © 2017 tyf',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    resource : `${APIV1}/resource/:id`,
    resources : `${APIV1}/resources`,
    posts: `${APIV1}/posts`,
    mdl : `${APIV1}/mdl`,
    models: `${APIV1}/models`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
