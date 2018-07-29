import * as MyReadsUrl from '../Images/MyReads.png';
import * as JammingUrl from '../Images/Jamming.png';
import * as DevourUrl from '../Images/Devour.png';
import * as WouldYouRatherURL from '../Images/wouldyourather.png';
import * as NathanUrl from '../Images/Me.jpg';

let posts = [
  {
    id: 'wouldYouRather',
    name: 'Would You Rather',
    datePosted: 'July 26, 2018',
    image: WouldYouRatherURL,
    description: 'The “Would You Rather” app is a game that a user has to decide between one of two scenarios that are asked in the form of option one or option two. The app starts off at the sign in screen where they are asked to choose a character to log in as. Once the character is chosen, they get redirected to their unanswered polls where each poll links to the question where they can choose which answer they want to select. All questions that have been answered will display results that are shown after submitting an answer, or the user could also go to the answered polls on the home page. To keep track of each users hard work, there is a leaderboard showing the number of questions they have asked and questions they have answered. First place goes to the character with the highest number of questions asked and answered. If the user runs out of questions or has one in mind, they are able to go to the new question link in the navigation bar to create a new question.',
    techUsed: 'React, Redux, JavaScript, Babel, HTML5, CSS3',
    link: 'http://wouldyourathergame.s3-website.us-east-2.amazonaws.com/#/',
    gitHubLink: 'https://github.com/sagenate24/Would-You-Rather',
  },
  {
    id: 'MyReads',
    name: 'MyReads Book Tracker',
    datePosted: 'June 20, 2018',
    image: MyReadsUrl,
    description: 'From the title, you can probably tell what this app is generally about! To go into more detail, ‘MyReads’ is an app that tracks books that someone has read, is currently reading, and wants to read! Awesome right? This web application consists of three shelve categories labeled as ‘Currently Reading’, ‘Want To Read’, and ‘Read’. When you have finished a book that you have on your ‘Currently Reading’ shelf, there’s a drop down icon that allows you to move that book into any of the other two shelves provided, as well as an option to delete the book from that shelf. If you have decided you’re bored with all of the books you have currently stored on your shelves, then go check out the search page. You can access the search page by clicking the icon in the bottom right corner and search for books by title or author. Once the books from your search results show up you can add them to any shelf on the home page by clicking on the icon and choosing a shelf to put it in. For simplistic reasons, all books on your three shelves will correspond with the books on the search page.',
    techUsed: 'React, JavaScript, Babel, HTML5, CSS3, Udacity’s custom api, AWS S3.',
    link: 'http://www.myreadswebsite.com1.s3-us-west-2.amazonaws.com/index.html#/',
    gitHubLink: 'https://github.com/sagenate24/My-Reads-Project',
  },
  {
    id: 'Jamming',
    name: 'Jamming, Music App',
    datePosted: 'May 8, 2018',
    image: JammingUrl,
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
    description: 'devour’ lets you search for businesses using the Yelp API. The first search field is for the name of a company, what type of company, or even just a general input such as ‘food near me’. The second search field is where you want to put a location to narrow your results whether you are trying to find something local, or planning a vacation and seeing what food options are in that destination area. The search results show all the businesses with their cover photo, their name, the street adress, what type of business they are, their ratings on Yelp, how many reviews, and the overall price based on how many cash emojis there are.',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Yelp Web API.',
    link: 'http://devour.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/',
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/ravenous',
  }
];

let aboutMe = [
  {
    id: 'Nathan',
    image: NathanUrl,
    description: 'I am a fast learner motivated to make a difference in the tech industry. For the past four years I have explored around HTML5 and CSS/CSS3 to build simple static websites for my own personal enjoyment. During the past year I have taken the initiative to further my knowledge in software development. I am now currently enrolled in Udacity’s React Nanodegree Program, completed a Codecademy course on building front end web applications, as well as creating my own personal projects in my freetime.',
    languages: 'JavaScript (ES6), React, Redux, HTML5, CSS/CSS3, Node, React Native, MongoDB',
    frameWorks: [
      'Mobile: React Native',
      'Web: React, Redux, ES6, Bootstrap 3 & 4',
      'Web Dev: Webpack, Babel, jsx',
      'Backend: Node, Express',
      'REST API: Yelp, Spotify, AWS S3'
    ],
    gitHubUrl: 'https://github.com/sagenate24',
  }
];

export function getMe() {
  return new Promise((res) => {
    setTimeout(() => res([...aboutMe]), 1000);
  });
}

export function getPosts() {
  return new Promise((res, rej) => {
    setTimeout(() => res([...posts]), 1000);
  });
}
