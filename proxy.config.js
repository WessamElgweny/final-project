var winston = require("winston");

function logProvider() {
  return winston.createLogger({
    level: "debug",
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()],
  });
}

const PROXY_CONF = [
  {
    context: ["/api/**"],
    target: "http://192.168.137.38/",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    logProvider: logProvider,
    cookiePathRewrite: "/local/",
  },
];

module.exports = PROXY_CONF;