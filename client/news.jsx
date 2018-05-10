// client/news.jsx
import React from 'react';
import Headline from './headline';

export default class News extends React.Component {
 render() {
   const { items } = this.props;
   return items.map(item => <Headline {...item}/>);
 }
}
