// app/middleware/robot.js
// options 为同名的 config, 即 app.config.robot
module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
    } else {
      await next();
    }
  }
};

// config/config.local.js
// 挂载 middleware
exports.middleware = [
  'robot'
];
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};
