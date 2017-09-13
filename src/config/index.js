export default {
  serverPort: 3000,
  baseUrl: 'http://localhost:3000',
  api: {
    url: '/api/'
  },
  views: {
    engine: '.hbs',
    extension: '.hbs',
    path: './views'
  },
  secret: "ngEurope rocks!",
  audience: "nodejs-jwt-auth",
  issuer: "https://gonto.com"
};
