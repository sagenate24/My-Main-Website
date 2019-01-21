import * as ssImg from '../Images/secondStep.png'
import * as ssImgSmall from '../Images/secondStep-small.png'
import * as cfc1 from '../Images/secondstep1.jpeg';
import * as cfc2 from '../Images/secondstep2.jpeg';
import * as cfc3 from '../Images/secondstep3.jpeg';
import * as flashImg from '../Images/flashcardsphones.png';
import * as flashImgSmall from '../Images/flashcardsphones-small.png';
import * as flashCards1 from '../Images/flashcards1.jpeg';
import * as flashCards2 from '../Images/flashcards2.jpeg';
import * as flashCards3 from '../Images/flashcards3.jpeg';
import * as wyrImg from '../Images/wyr.png';
import * as wyrImgSmall from '../Images/wyr-small.png';
import * as wyr1 from '../Images/wyr1.jpeg';
import * as wyr2 from '../Images/wyr2.jpg';
import * as wyr3 from '../Images/wyr3.jpg';
import * as myReadsImg from '../Images/myReads.png';
import * as myReadsImgSmall from '../Images/myReads-small.png';
import * as myReads1 from '../Images/myreads1.png';
import * as myReads2 from '../Images/myreads2.png';
import * as myReads3 from '../Images/myreads3.png';
import * as jammingImg from '../Images/jamming.png';
import * as jammingImgSmall from '../Images/jamming-small.png';
import * as jamming1 from '../Images/jamming1.jpeg';
import * as jamming2 from '../Images/jamming2.jpeg';
import * as jamming3 from '../Images/jamming3.jpeg';
import * as devourImg from '../Images/devour.png';
import * as devourImgSmall from '../Images/devour-small.png';
import * as devour1 from '../Images/devour1.png';
import * as devour2 from '../Images/devour2.png';
import * as devour3 from '../Images/devour3.png';
import * as javaScriptImg from '../Images/js.png';
import * as reactImg from '../Images/react.png';
import * as reduxImg from '../Images/redux.png';
import * as htmlImg from '../Images/html.png';
import * as cssImg from '../Images/css.png';
import * as nodeImg from '../Images/node.png';
import * as sassImg from '../Images/sass.png';
import * as responsive from '../Images/responsive.png';
import * as performance from '../Images/performance.png';
import * as design from '../Images/design.png';

const posts = [
  {
    id: 'secondStep',
    name: 'Committee For Children',
    type: 'Front End Developer',
    datePosted: '3 Months',
    image: ssImg,
    smallImage: ssImgSmall,
    alt: 'secondstep.org homepage on labtop',
    shortDescripion: 'Front End Developer for the CFC helping re-brand their new website Second Step.',
    description: 'Worked as a Front End Developer on the Committee For Children’s react team, tasked with rewriting their existing website into a React application.',
    link: 'https://www.secondstep.org/',
    images: [
      {
        id: 1,
        imageUrl: cfc1,
        alt: 'second step 1'
      },
      {
        id: 2,
        imageUrl: cfc2,
        alt: 'second step 2'
      },
      {
        id: 3,
        imageUrl: cfc3,
        alt: 'second step 3'
      },
    ],
    gitHubLink: 'https://github.com/sagenate24/Flash-Cards',
  },
  {
    id: 'flashCards',
    name: 'Flash Cards',
    type: 'Academic / Personal Project',
    datePosted: 'September 25, 2018',
    image: flashImg,
    smallImage: flashImgSmall,
    alt: 'home and quiz screen of Flash Cards on Iphone 8+',
    shortDescripion: 'Mobile application built in React Native that allows users to study collections of flashcards and more!',
    description: 'Mobile application that allows users to study collections of flashcards and more! Built in React, React Native, and Redux.',
    links: [
      { store: 'Apple', url: 'https://itunes.apple.com/us/app/flashcards-study-more/id1436666696?ls=1&mt=8' },
      { store: 'Android', url: 'https://play.google.com/store/apps/details?id=org.nathansage.flashcards' }
    ],
    images: [
      {
        id: 1,
        imageUrl: flashCards1,
        alt: 'Apple app store'
      },
      {
        id: 2,
        imageUrl: flashCards2,
        alt: 'Android screen shots of app'
      },
      {
        id: 3,
        imageUrl: flashCards3,
        alt: 'Android screen shots of app'
      },
    ],
    gitHubLink: 'https://github.com/sagenate24/Flash-Cards',
  },
  {
    id: 'wouldYouRather',
    name: 'Would You Rather',
    type: 'Academic / Personal Project',
    datePosted: 'July 26, 2018',
    image: wyrImg,
    smallImage: wyrImgSmall,
    alt: 'Would You Rather Question on labtop',
    shortDescripion: 'Choose your best answer in Would You Rather.',
    description: 'Fun and interactive game posing questions in the form of "would you rather". Built in React, JavaScript(es6), and Redux.',
    link: 'http://wouldyourathergame.s3-website.us-east-2.amazonaws.com/#/',
    images: [
      {
        id: 1,
        imageUrl: wyr1,
        alt: 'would you rather 1'
      },
      {
        id: 2,
        imageUrl: wyr2,
        alt: 'would you rather 2'
      },
      {
        id: 3,
        imageUrl: wyr3,
        alt: 'would you rather 3'
      },
    ],
    gitHubLink: 'https://github.com/sagenate24/Would-You-Rather',
  },
  {
    id: 'myReads',
    name: 'MyReads',
    type: 'Academic / Personal Project',
    datePosted: 'June 20, 2018',
    image: myReadsImg,
    smallImage: myReadsImgSmall,
    alt: 'MyReads homepage on labtop',
    shortDescripion: 'Book tracking made easy with MyReads.',
    description: 'Book tracker application using a custom API provided by Udacity. Built in React and Javascript(es6), and CSS3.',
    link: 'http://www.myreadswebsite.com1.s3-us-west-2.amazonaws.com/index.html#/',
    images: [
      {
        id: 1,
        imageUrl: myReads1,
        alt: 'my reads 1'
      },
      {
        id: 2,
        imageUrl: myReads2,
        alt: 'my reads 2'
      },
      {
        id: 3,
        imageUrl: myReads3,
        alt: 'my reads 3'
      },
    ],
    gitHubLink: 'https://github.com/sagenate24/My-Reads-Project',
  },
  {
    id: 'jamming',
    name: 'Jamming',
    type: 'Academic / Personal Project',
    datePosted: 'May 8, 2018',
    image: jammingImg,
    smallImage: jammingImgSmall,
    alt: 'Jamming homepage on labtop',
    shortDescripion: 'Create new playlists for your Spotify account.',
    description: 'Music application that allows you to add playlist directly to your Spotify account and more. Built in React using Spotify\'s Web API.',
    link: 'http://jamming.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/#/',
    images: [
      {
        id: 1,
        imageUrl: jamming1,
        alt: 'jamming 1'
      },
      {
        id: 2,
        imageUrl: jamming2,
        alt: 'jamming 2'
      },
      {
        id: 3,
        imageUrl: jamming3,
        alt: 'jamming 3'
      },
    ],
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/jammingnew',
  },
  {
    id: 'devour',
    name: 'devour',
    type: 'Academic / Personal Project',
    datePosted: 'April 28, 2018',
    image: devourImg,
    smallImage: devourImgSmall,
    alt: 'devour homepage on labtop',
    shortDescripion: 'Hungry?... Use devour to find great resturaunts near you.',
    description: 'Search for restaurants and businesses around the world. Built in React and Javascript with data provided by Yelp.',
    link: 'http://devour.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/',
    images: [
      {
        id: 1,
        imageUrl: devour1,
        alt: 'devour 1'
      },
      {
        id: 2,
        imageUrl: devour2,
        alt: 'devour 2'
      },
      {
        id: 3,
        imageUrl: devour3,
        alt: 'devour 3'
      },
    ],
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/ravenous',
  }
];

export function getPosts() {
  return new Promise((res) => res({ posts: posts }));
}

export const navContent = [
  {
    id: 'home',
    title: 'Home',
    pathName: '/',
    subLinks: [
      { id: 'secondStep', name: 'Committee For Children' },
      { id: 'flashCards', name: 'Flash Cards' },
      { id: 'wouldYouRather', name: 'Would You Rather' },
      { id: 'myReads', name: 'MyReads' },
      { id: 'jamming', name: 'Jamming' },
      { id: 'devour', name: 'devour' },
    ]
  },
  {
    id: 'aboutMe',
    title: 'About Me',
    pathName: '/about',
    subLinks: [
      { id: 'background', name: 'Background' },
      { id: 'myWork', name: 'My Work' },
      { id: 'mySkills', name: 'My Skills' },
    ]
  },
  {
    id: 'contact',
    title: 'Contact',
    pathName: '/contact'
  },
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
    alt: 'Scaling performance bars',
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
    alt: 'JavaScript Icon',
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
    imageUrl: sassImg,
    alt: 'Syntactically Awesome Style Sheets Icon',
    text: 'Sass/Scss'
  },
];
