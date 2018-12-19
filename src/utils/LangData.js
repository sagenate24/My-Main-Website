import * as javaScriptImg from '../Images/js.png';
import * as reactImg from '../Images/react.png';
import * as reduxImg from '../Images/redux.png';
import * as htmlImg from '../Images/html.png';
import * as cssImg from '../Images/css.png';
import * as nodeImg from '../Images/node.png';
import * as awsImg from '../Images/aws.png';

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
    id: 1,
    title: 'Responsive',
    imageUrl: responsive,
    alt: 'multiple devices',
    text: 'My applications will work on any device, big or small.',
  },
  {
    id: 2,
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
    text: 'Better user experience drives business revenue.',
  }
];

export const mySkills = [
  {
    id: 1,
    imageUrl: javaScriptImg,
    alt: 'Javascript Icon',
    text: 'JavaScript'
  },
  {
    id: 2,
    imageUrl: reactImg,
    alt: 'React Icon',
    text: 'React.JS'
  },
  {
    id: 3,
    imageUrl: reactImg,
    alt: 'React Icon',
    text: 'React Native'
  },
  {
    id: 4,
    imageUrl: reduxImg,
    alt: 'Redux Icon',
    text: 'Redux'
  },
  {
    id: 5,
    imageUrl: htmlImg,
    alt: 'HTML5 Icon',
    text: 'HTML5'
  },
  {
    id: 6,
    imageUrl: cssImg,
    alt: 'CSS3 Icon',
    text: 'CSS/CSS3'
  },
  {
    id: 7,
    imageUrl: nodeImg,
    alt: 'Node Icon',
    text: 'Node.JS'
  },
  {
    id: 8,
    imageUrl: awsImg,
    alt: 'Amazon Web Services Icon',
    text: 'AWS'
  },
]

export function getLanguagesInfo() {
  return new Promise((res) => res([...languages]));
}
