import * as MyReadsUrl from '../Images/MyReads.png';
import * as JammingUrl from '../Images/Jamming.png';
import * as DevourUrl from '../Images/Devour.png';
import * as NathanUrl from '../Images/Me.jpg';

let posts = [
  {
    id: 'MyReads',
    name: 'My Reads Book Tracker',
    datePosted: 'June 20, 2018',
    image: MyReadsUrl,
    description: 'From the title, you can probably tell what this app is generally about… But, to go into more detail, its an app that tracks books! Awesome right? This web application consists of three shelve categories labeled as ‘Currently Reading’, ‘Want To Read’, and ‘Read’. When you have finished a book that you have on your ‘Currently Reading’ shelf, there is a drop down icon that allows you to move that book into any of the other two shelves provided, as well as deleting the book from that shelf. If you have decided your bored with all the books you have currently stored on your shelves then go check out the search page. You can access the search page by clicking the icon in the bottom right corner and search for books by title or author. Once the books from your search results show up you can add them to any shelf on the home page by clicking on the icon and choosing a shelf. For simplistic reasons all books on your three shelves will correspond with the books on the search page.',
    techUsed: 'React, JavaScript, Babel, HTML5, CSS3, Udacity’s custom api, AWS S3.',
    link: 'http://www.myreadswebsite.com1.s3-us-west-2.amazonaws.com/index.html#/',
    gitHubLink: 'https://github.com/sagenate24/My-Reads-Project',
  },
  {
    id: 'Jamming',
    name: 'Jamming, A Music Web App',
    datePosted: 'May 8, 2018',
    image: JammingUrl,
    description: 'This web application is used with the Spotify api. When you go to the web page there will be a redirect login to sign in to your spotify account so that the app can get and post data for the main functionalities. The first feature you will see is the search input field where you can type in a name of artist or song to get a list of tracks queried to all tracks given from the Spotify api. You can add songs you like to the ‘new playlist’ feature, give it a name, and save that playlist directly to your Spotify account. Further down on the page shows all of your current playlists on Spotify as well as each song inside sed playlist. Every track, whether it is in the search results or your current playlists, has an audio feature to play a thirty second preview of the particular song you press. All you have to do is click on the image. If there is no audio there will be some feedback.',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Spotify Web API.',
    link: 'https://s3.us-east-2.amazonaws.com/jammingwebapp/index.html',
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/jammingnew',
  },
  {
    id: 'devour',
    name: 'Devour, A Yelp-like Clone',
    datePosted: 'April 28, 2018',
    image: DevourUrl,
    description: 'Devour lets you search for businesses using the Yelp api. The first search field is for the name of a company, what type of company, or even just general word, such as ‘food near me’. The second search field is where you want to put a location to narrow your results whether you are trying to find something local, or maybe planning a vacation and you have the need to find some good food options. The search results show all the businesses with there cover photo, their name, the street adress, what type of business they are, there ratings on Yelp, how many reviews, and the overall price based on how many cash emojis there are.',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Yelp Web API.',
    link: 'https://s3.us-east-2.amazonaws.com/devourapp/index.html',
    gitHubLink: 'https://github.com/sagenate24/React-web-apps/tree/master/ravenous',
  }
];

let aboutMe = [
  {
    id: 'Nathan',
    image: NathanUrl,
    description: 'I am a fast learner motivated to make a difference in the tech industry. For the past four years I have messed around with HTML5 and CSS/CSS3 to build simple static websites for my own personal enjoyment. Within this past year I have taken the initiative to further my knowledge in software development to create real world projects. I am now currently enrolled in Udacity’s React Nanodegree Program, completed a Codecademy course on building front end web applications, as well as creating my own personal projects.',
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
