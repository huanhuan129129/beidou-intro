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
