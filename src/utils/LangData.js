import * as javaScript from '../Images/Languages/js.jpg';
import * as react from '../Images/Languages/react.png';
import * as reduxPic from '../Images/Languages/redux.png';
import * as html from '../Images/Languages/HMTL5.png';
import * as css from '../Images/Languages/css3.png';
import * as node from '../Images/Languages/node.png';

const languages = [
  {title: 'JavaScript', img: javaScript},
  {title: 'React', img: react},
  {title: 'React Native', img: react},
  {title: 'Redux', img: reduxPic},
  {title: 'HTML5', img: html},
  {title: 'CSS/CSS3', img: css},
  {title: 'Node', img: node},
];

export function getLanguagesInfo() {
  return new Promise((res) => res([...languages]));
}