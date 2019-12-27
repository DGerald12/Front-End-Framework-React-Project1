import React from 'react';
import ReactDOM from 'react-dom';

const FavColor1 = React.createElement('li', {}, "Blue");
const FavColor2 = React.createElement('li', {}, "Yellow");
const FavColor3 = React.createElement('li', {}, "Brown");

const FavArtist1 = React.createElement('li', {}, "Tye Tribbett");
const FavArtist2 = React.createElement('li', {}, "JJ Hairston & Youthful Praise");
const FavArtist3 = React.createElement('li', {}, "Israel Houghton");

const FavFood1 = React.createElement('li', {}, "NY Strip Steak");
const FavFood2 = React.createElement('li', {}, "Japanese");
const FavFood3 = React.createElement('li', {}, "Italian");

const FavWeb1 = React.createElement('li', {}, React.createElement("a",  {href: 'https://www.TigerIllustrated.com' }, 'www.TigerIllustrated.com'));
const FavWeb2 = React.createElement('li', {}, React.createElement("a",  {href: 'https://www.Twitter.com' }, 'www.Twitter.com'));
const FavWeb3 = React.createElement('li', {}, React.createElement("a",  {href: 'https://www.cbssports.com' }, 'www.cbssports.com'));


ReactDOM.render(
  React.createElement(
    'div', {}, React.createElement('h1', {}, 'My Favorite Things'), 
    React.createElement('ul', {}, React.createElement('li', {}, 'Favorite Colors', React.createElement('ol', {}, FavColor1, FavColor2, FavColor3)),
    React.createElement('li', {}, 'Favorite Music', React.createElement('ol', {}, FavArtist1, FavArtist2, FavArtist3)),
    React.createElement('li', {}, 'Favorite Food', React.createElement('ol', {}, FavFood1, FavFood2, FavFood3)),
    React.createElement('li', {}, 'Favorite Websites', React.createElement('ol', {}, FavWeb1, FavWeb2, FavWeb3)))),
  document.getElementById('root')
);



