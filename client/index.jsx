// client/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import News from './news';
import './index.styl';

export default class View extends React.Component {
  static getPartial(props) {
    const { news } = props;
    const html = <News items={news} />
    return { html };
  }
  render() {
    const { html, news } = this.props;
    return (
      <html>
        <head>
          <title>news</title>
          <link rel="stylesheet" href="/build/index.css"/>
        </head>
        <body>
        <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
        <script dangerouslySetInnerHTML={{__html: `window.$$data=${JSON.stringify(news)}`}} />
        <script src="/build/manifest.js" />
        <script src="/build/index.js" />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  const news = window.$$data;
  ReactDOM.hydrate(<News items={news} />, document.getElementById('container'));
}
