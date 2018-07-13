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
    description: 'From the title, you can probably tell what this app is generally about… But, to go into more detail, its an app that tracks books! In this web application there are three shelve categories labeled as ‘Currently Reading’, ‘Want To Read’, and ‘Read’. When you have finished a book that you have been ‘Currently Reading’, there is a drop down icon that allows you to move that book into whatever shelf you desire, Such as the ‘Read’ shelf! When you run out of books to read click the eyeglass icon to navigate to the search page and add new books directly to your shelves on the main page.',
    techUsed: 'React, JavaScript, Babel, HTML5, CSS3, Udacity’s custom api, AWS S3.',
    link: 'http://www.myreadswebsite.com1.s3-us-west-2.amazonaws.com/index.html#/',
  },
  {
    id: 'Jamming',
    name: 'Jamming, A Music Web App',
    datePosted: 'May 8, 2018',
    image: JammingUrl,
    description: 'This app is used with the Spotify api. When you go to the web page there will be a redirect login to sign in to spotify so that the app can get and post data to your account. The first feature you will see is the search field where you can type in names of artists or songs to get a list of tracks queried from the Spotify api. You can then add songs you like to the ‘new playlist’ feature, give it a name, and save that playlist directly to your Spotify account. This web app also shows all of your current playlists on Spotify as well as the songs in each of your playlists. Every track, whether it is in the search query or your current playlists, has an onclick feature to play a thirty second preview audio of the specific song you press.',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Spotify Web API.',
    link: 'https://s3.us-east-2.amazonaws.com/jammingwebapp/index.html',
  },
  {
    id: 'devour',
    name: 'Devour, A Yelp-like Clone',
    datePosted: 'April 28, 2018',
    image: DevourUrl,
    description: 'Devour lets you search for businesses using the Yelp api. The first search field is for the name of a company, what type of company, or even just general words like ‘food’. The second search field is where you want to put a location to narrow your search to possibly something local or maybe your planning a vacation and you want to see some food options their. The results when the search button is clicked shows all the businesses with there cover photo, their name, the street adress, what type of business they are, there ratings on Yelp, how many reviews, and the overall price based on how many cash emojis there are.',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Yelp Web API.',
    link: 'https://s3.us-east-2.amazonaws.com/devourapp/index.html',
  }
];

let aboutMe = [
  {
    id: 'Nathan',
    image: NathanUrl,
    description: 'I am fast learner hungry for some action in the tech industry. For the past four years I have messed with HTML and CSS to build simple static websites for fun. Within this past year I have taken the initiative to further my knowledge in software development to create real world projects. Now I am currently enrolled in Udacity’s React Nanodegree Program, have taken a Codecademy course on building front end web applications, as well as creating personal projects.',
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