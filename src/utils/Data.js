import * as MyReadsUrl from '../Images/MyReads.jpg';
import * as JammingUrl from '../Images/Jamming.png';
import * as DevourUrl from '../Images/Devour.png';
import * as WouldYouRatherURL from '../Images/wyr2.jpg';
import * as FlashUrl from '../Images/g.jpg';

const posts = [
  {
    id: 'flashCards',
    name: 'FlashCards',
    datePosted: 'September 25, 2018',
    image: FlashUrl,
    shortDescripion: 'Study more with FlashCards mobile app',
    description: 'Mobile application that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, take quizzes on those decks, and create a profile.',
    techUsed: 'React, React Native, Redux, JavaScript, Babel, HTML5, CSS3',
    links: [
      {store: 'Apple', url: 'https://itunes.apple.com/us/app/flashcards-study-more/id1436666696?ls=1&mt=8'},
      {store: 'Android', url: 'https://play.google.com/store/apps/details?id=org.nathansage.flashcards'}
    ],
    gitHubLink: 'https://github.com/sagenate24/Flash-Cards',
  },
  {
    id: 'wouldYouRather',
    name: 'Would You Rather',
    datePosted: 'July 26, 2018',
    image: WouldYouRatherURL,
    shortDescripion: 'Choose your best answer in Would You Rather',
    description: 'Would You Rather, a game where a user has to decide between one of two scenarios that are asked in the form of option one or option two. The app starts off at the sign in screen where they are asked to choose a character to log in as. Once the character is chosen, they get redirected to their unanswered polls. Each poll links to a specific question where they can choose which answer they feel is best. All questions that have been answered will display results from all users answers. The user can also view previous results at the answered polls section on the homepage. To keep track of of all user scores, there is a leaderboard showing the number of questions they have asked and questions and answered. First place goes to the character with the highest number of questions asked and answered. If the user runs out of questions or has one they want to add, they can navigate to the new question link in the navbar to create a new question.',
    techUsed: 'React, Redux, JavaScript, Babel, HTML5, CSS3',
    link: 'http://wouldyourathergame.s3-website.us-east-2.amazonaws.com/#/',
    gitHubLink: 'https://github.com/sagenate24/Would-You-Rather',
  },
  {
    id: 'MyReads',
    name: 'MyReads',
    datePosted: 'June 20, 2018',
    image: MyReadsUrl,
    shortDescripion: 'Book tracking made easy with MyReads',
    description: 'From the title, you can probably tell what this app is generally about! To go into more detail, ‘MyReads’ is an app that lets a user track books they have read, books they are currently reading, and want to read! Awesome right? This web application consists of three shelve categories labeled as ‘Currently Reading’, ‘Want To Read’, and ‘Read’. When you have finished a book that you have on your ‘Currently Reading’ shelf, there’s a drop down icon that allows you to move that book into any of the other two shelves provided, as well as an option to delete the book entirely. If the user has decided they are bored with all of the books they have currently stored on the shelves, they have access to a search page. To access the search page there is another clickable icon in the bottom right corner. Search results show up automatically as the user types. They can also add any book to any shelf on the home page by clicking on the dropdown icon and choosing a category to place them in. For simplistic reasons, all books on the three shelves will correspond with the books on the search page.',
    techUsed: 'React, JavaScript, Babel, HTML5, CSS3, Udacity’s custom api, AWS S3.',
    link: 'http://www.myreadswebsite.com1.s3-us-west-2.amazonaws.com/index.html#/',
    gitHubLink: 'https://github.com/sagenate24/My-Reads-Project',
  },
  {
    id: 'Jamming',
    name: 'Jamming, Music App',
    datePosted: 'May 8, 2018',
    image: JammingUrl,
    shortDescripion: 'Create new playlists for your Spotify account',
    description: '‘Jamming’ is used with the Spotify API. When you go to the web page there will be a redirect login to sign in to your spotify account so that the app can get and post data for the main functionalities. The first feature you will see is the search input field where you can type in a name of an artist or song to get a list of tracks queried to all tracks given from the Spotify API. You can add songs you like to the ‘new playlist’ feature, give that new playlist a name of your choice, and save that playlist directly to your Spotify account. Further down on the page shows all of your current playlists you already have on Spotify, as well as each song inside said playlist. Every track, whether it is in the search results or your current playlists, has an audio feature to play a thirty second preview of the particular song you press. All you have to do is click on the image! If there is no audio there will be some feedback.',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Spotify Web API.',
    link: 'http://jamming.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/#/',
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/jammingnew',
  },
  {
    id: 'devour',
    name: 'devour, Yelp-like Clone',
    datePosted: 'April 28, 2018',
    image: DevourUrl,
    shortDescripion: 'Hungy?... Use devour to find great resturaunts near you',
    description: 'devour’ lets you search for businesses using the Yelp API. The first search field is for the name of a company, type of company, or general input such as ‘food near me’. The second search field is for the desired location. Search results show all relevant businesses with their cover photo, name, street address, business type, overall ratings on Yelp, number of reviews, and the overall price based on how many cash emojis are presented. If you are trying to find something local, researching the best eats, or even looking for a fun interactive experience, then look no further! You will find everything you desire in this web application!',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Yelp Web API.',
    link: 'http://devour.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/',
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/ravenous',
  }
];

let aboutMe = [
  {
    id: 'Nathan',
    shortDesk: 'Motivated Front End Developer From Seattle Washington',
    description: 'Fast learner motivated to make a difference in the tech industry. For the past four years I have explored around HTML5 and CSS/CSS3 to build simple static websites for my own personal enjoyment. During the past year I have taken the initiative to further my knowledge in software development. I am now currently enrolled in Udacity’s React Nanodegree Program, completed a Codecademy course on building front end web applications, as well as creating my own personal projects in my freetime.',
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
];

export function getMe() {
  return new Promise((res) => res([...aboutMe]));
}

export function getPosts() {
  return new Promise((res, rej) => res([...posts]));
}
