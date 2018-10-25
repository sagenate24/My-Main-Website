import * as flashImg from '../Images/flashcards.jpg';
import * as flashSmallImg from '../Images/flashcardssmall.png';
import * as wyrImg from '../Images/wyr.jpg';
import * as wyrSmallImg from '../Images/wyrsmall.png';
import * as myReadsImg from '../Images/MyReads.jpg';
import * as myReadsSmallImg from '../Images/myreadssmall.png';
import * as jammingImg from '../Images/Jamming.png';
import * as jammingSmallImg from '../Images/jammingsmall.png';
import * as devourImg from '../Images/Devour.png';
import * as devourSmallImg from '../Images/devoursmall.png';
import * as linkdinImg from '../Images/linkedin.png';
import * as gmailImg from '../Images/gmail.png';
import * as phoneImg from '../Images/phone.png';
import * as meImg from '../Images/me.jpg';

const posts = [
  {
    id: 'flashCards',
    name: 'Flash Cards',
    datePosted: 'September 25, 2018',
    image: flashImg,
    smallImage: flashSmallImg,
    shortDescripion: 'Study more on the go with FlashCards',
    description: 'Mobile application that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, take quizzes on those decks, and create a profile.',
    techUsed: 'React, React Native, Redux, JavaScript, Babel, HTML5, CSS3, Expo, Xcode.',
    links: [
      { store: 'Apple', url: 'https://itunes.apple.com/us/app/flashcards-study-more/id1436666696?ls=1&mt=8' },
      { store: 'Android', url: 'https://play.google.com/store/apps/details?id=org.nathansage.flashcards' }
    ],
    gitHubLink: 'https://github.com/sagenate24/Flash-Cards',
  },
  {
    id: 'wouldYouRather',
    name: 'Would You Rather',
    datePosted: 'July 26, 2018',
    image: wyrImg,
    smallImage: wyrSmallImg,
    shortDescripion: 'Choose your best answer in Would You Rather',
    description: 'Would You Rather, a game where a user has to decide between one of two scenarios that are asked in the form of option one or option two. The app starts off at the sign in screen where they are asked to choose a character to log in as. Once the character is chosen, they get redirected to their unanswered polls. Each poll links to a specific question where they can choose which answer they feel is best. All questions that have been answered will display results from all users answers. The user can also view previous results at the answered polls section on the homepage. These are just a few features. Go check it out!',
    techUsed: 'React, Redux, JavaScript, Babel, Webpack, HTML5, CSS3, AWS S3.',
    link: 'http://wouldyourathergame.s3-website.us-east-2.amazonaws.com/#/',
    gitHubLink: 'https://github.com/sagenate24/Would-You-Rather',
  },
  {
    id: 'MyReads',
    name: 'MyReads',
    datePosted: 'June 20, 2018',
    image: myReadsImg,
    smallImage: myReadsSmallImg,
    shortDescripion: 'Book tracking made easy with MyReads',
    description: "MyReads, an app that lets you track books you've read, books you are currently reading, and want to read! Awesome right? This web application consists of three shelve categories labeled as ‘Currently Reading’, ‘Want To Read’, and ‘Read’. When you have finished a book that you have on your ‘Currently Reading’ shelf, there’s a drop down icon that allows you to move that book into any of the other two shelves provided, as well as an option to delete the book entirely. To access the search page click the search icon in the bottom right corner. Search results show up automatically as the as you type.",
    techUsed: 'React, JavaScript, Babel, HTML5, CSS3, Udacity’s custom api, AWS S3.',
    link: 'http://www.myreadswebsite.com1.s3-us-west-2.amazonaws.com/index.html#/',
    gitHubLink: 'https://github.com/sagenate24/My-Reads-Project',
  },
  {
    id: 'Jamming',
    name: 'Jamming',
    datePosted: 'May 8, 2018',
    image: jammingImg,
    smallImage: jammingSmallImg,
    shortDescripion: 'Create new playlists for your Spotify account',
    description: 'Jamming is used with the Spotify API. To use this app you will need to login with your spotify account. The first feature you will see is the search input field where you can type in a name of an artist or song to get a list of songs from Spotify. You can add songs to the ‘new playlist’ feature, give that playlist a name, and save it directly to your Spotify account. Further down the page shows all your current playlists and songs on Spotify. Every track has an audio feature to play a thirty second preview. All you have to do is click on the image! Songs that do not contain audio will show a disabled icon on hover. Enjoy!',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Spotify Web API, AWS S3.',
    link: 'http://jamming.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/#/',
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/jammingnew',
  },
  {
    id: 'devour',
    name: 'devour',
    datePosted: 'April 28, 2018',
    image: devourImg,
    smallImage: devourSmallImg,
    shortDescripion: 'Hungry?... Use devour to find great resturaunts near you',
    description: 'devour’ lets you search for businesses using the Yelp API. The first search field is for the name of a company, type of company, or general input such as ‘food near me’. The second search field is for the desired location. Search results show all relevant businesses with their cover photo, name, street address, business type, overall ratings on Yelp, number of reviews, and the overall price based on how many cash emojis are presented. If you are trying to find something local, researching the best eats, or even looking for a fun interactive experience, then look no further! You will find everything you desire in this web application!',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Yelp Web API, AWS S3.',
    link: 'http://devour.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/',
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/ravenous',
  }
];

const aboutMe = {
    id: 'Nathan',
    shortDesk: 'Motivated Developer From Seattle Washington',
    description: 'Fast learner motivated to make a difference in the tech industry. For the past four years I have explored around HTML5 and CSS/CSS3 to build simple static websites for my own personal enjoyment. During the past year I have taken the initiative to further my knowledge in software development. I am now currently enrolled in Udacity’s React Nanodegree Program, completed a Codecademy course on building front end web applications, as well as creating my own personal projects in my freetime.',
    image: meImg,
    frameWorks: [
      {title:'Mobile', name:'React Native'},
      {title:'Web', name:'React, Redux, ES6'},
      {title:'Web Dev', name:'Webpack, Babel, jsx'},
      {title:'Backend', name:'Node, Express'},
      {title:'REST API', name:'Yelp, Spotify, AWS S3'},
      {title:'Test', name:'Jest, Nightwatch'},
    ],
    gitHubUrl: 'https://github.com/sagenate24',
  }

const contactInfo = {
    email: 'sagenate24@gmail.com',
    linkedinURL: 'https://www.linkedin.com/in/nathan-sage-689296163/',
    linkedinImage: linkdinImg,
    gmailIcon: gmailImg,
    pIcon: phoneImg,
  }

export function getMe() {
  return new Promise((res) => res({...aboutMe}));
}

export function getPosts() {
  return new Promise((res) => res([...posts]));
}

export function getContactInfo() {
  return new Promise((res) => res({...contactInfo}));
}
