// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/news', controller.news.show);
};
