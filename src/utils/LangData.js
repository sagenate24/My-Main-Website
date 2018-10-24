import * as javaScriptImg from '../Images/js.jpg';
import * as reactImg from '../Images/react.png';
import * as reduxImg from '../Images/redux.png';
import * as htmlImg from '../Images/html.png';
import * as cssImg from '../Images/css.png';
import * as nodeImg from '../Images/node.png';

const languages = [
  {title: 'JavaScript', img: javaScriptImg},
  {title: 'React', img: reactImg},
  {title: 'React Native', img: reactImg},
  {title: 'Redux', img: reduxImg},
  {title: 'HTML5', img: htmlImg},
  {title: 'CSS/CSS3', img: cssImg},
  {title: 'Node', img: nodeImg},
];

export function getLanguagesInfo() {
  return new Promise((res) => res([...languages]));
}
