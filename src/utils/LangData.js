import * as javaScriptImg from '../Images/js.jpg';
import * as reactImg from '../Images/react.png';
import * as reduxImg from '../Images/redux.png';
import * as htmlImg from '../Images/html.png';
import * as cssImg from '../Images/css.png';
import * as nodeImg from '../Images/node.png';

import * as responsive from '../Images/responsive.png';
import * as performance from '../Images/performance.png';
import * as design from '../Images/design.png';

const languages = [
  {title: 'JavaScript', img: javaScriptImg},
  {title: 'React', img: reactImg},
  {title: 'React Native', img: reactImg},
  {title: 'Redux', img: reduxImg},
  {title: 'HTML5', img: htmlImg},
  {title: 'CSS/CSS3', img: cssImg},
  {title: 'Node', img: nodeImg},
];

export const myWork = [
  {
    id: 2,
    title: 'Responsive',
    imageUrl: responsive,
    alt: 'multiple devices',
    text: 'My applications will work on any device, big or small.',
  },
  {
    id: 1,
    title: 'Performance',
    imageUrl: performance,
    alt: 'speedometer fast',
    text: 'Creating fast apps to make my users happy is my highest priority.',
  },
  {
    id: 3,
    title: 'Design',
    imageUrl: design,
    alt: 'pencil and ruler',
    text: 'Better user experience drives business revenue',
  }
]

export function getLanguagesInfo() {
  return new Promise((res) => res([...languages]));
}
