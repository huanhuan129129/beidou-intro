// app/controller/news.js
const Controller = require('beidou-core').Controller;

class NewsController extends Controller {

  async show() {
    const news = await this.ctx.service.news.get();
    await this.ctx.render('index', {
      news,
    });
  }
}

module.exports = NewsController;
