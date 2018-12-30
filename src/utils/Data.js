import * as ssImg from '../Images/secondStep.png'
import * as cfc1 from '../Images/cfc1.jpeg';
import * as cfc2 from '../Images/cfc2.jpeg';
import * as cfc3 from '../Images/cfc3.jpeg';
import * as flashImg from '../Images/flashcardsphones.png';
import * as wyrImg from '../Images/wyr.png';
import * as wyr1 from '../Images/wyr1.jpeg';
import * as wyr2 from '../Images/wyr2.jpeg';
import * as wyr3 from '../Images/wyr3.jpeg';
import * as myReadsImg from '../Images/myreads.png';
import * as myReads1 from '../Images/myReads1.jpeg';
import * as myReads2 from '../Images/myReads2.jpeg';
import * as myReads3 from '../Images/myReads3.jpeg';
import * as jammingImg from '../Images/jamming.png';
import * as jamming1 from '../Images/jamming1.jpeg';
import * as jamming2 from '../Images/jamming2.jpeg';
import * as jamming3 from '../Images/jamming3.jpeg';
import * as devourImg from '../Images/devour.png';
import * as devour1 from '../Images/devour1.jpeg';
import * as devour2 from '../Images/devour2.jpeg';
import * as devour3 from '../Images/devour3.jpeg';

import * as flashcardsImg1 from '../Images/flashcards1.jpeg';
import * as flashcardsImg2 from '../Images/flashcards2.png';

const posts = [
  {
    id: 'secondStep',
    name: 'Committee For Children',
    type: 'Front End Developer',
    datePosted: '3 Months',
    image: ssImg,
    shortDescripion: 'Front End Developer for the CFC helping re-brand their new website Second Step.',
    description: '',
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
    type: 'MOBILE APPLICATION',
    datePosted: 'September 25, 2018',
    image: flashImg,
    shortDescripion: 'Mobile application built in React Native that allows users to study collections of flashcards and more!',
    description: 'Mobile application built in React Native that allows users to study collections of flashcards and more!',
    techUsed: 'React, React Native, Redux, JavaScript, Babel, HTML5, CSS3, Expo, Xcode.',
    links: [
      { store: 'Apple', url: 'https://itunes.apple.com/us/app/flashcards-study-more/id1436666696?ls=1&mt=8' },
      { store: 'Android', url: 'https://play.google.com/store/apps/details?id=org.nathansage.flashcards' }
    ],
    images: [
      {
        id: 1,
        imageUrl: flashcardsImg1,
        alt: 'google play store'
      },
      {
        id: 2,
        imageUrl: flashcardsImg2,
        alt: 'home page of app'
      },
      {
        id: 3,
        imageUrl: flashcardsImg2,
        alt: 'home page of app'
      },
    ],
    gitHubLink: 'https://github.com/sagenate24/Flash-Cards',
  },
  {
    id: 'wouldYouRather',
    name: 'Would You Rather',
    datePosted: 'July 26, 2018',
    image: wyrImg,
    shortDescripion: 'Choose your best answer in Would You Rather',
    description: 'Decide between one of two difficult scenarios in th asked in the form of option one or option two. The app starts off at the sign in screen where they are asked to choose a character to log in as. Once the character is chosen, they get redirected to their unanswered polls. Each poll links to a specific question where they can choose which answer they feel is best. All questions that have been answered will display results from all users answers. The user can also view previous results at the answered polls section on the homepage. These are just a few features. Go check it out!',
    techUsed: 'React, Redux, JavaScript, Babel, Webpack, HTML5, CSS3, AWS S3.',
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
    id: 'MyReads',
    name: 'MyReads',
    datePosted: 'June 20, 2018',
    image: myReadsImg,
    shortDescripion: 'Book tracking made easy with MyReads',
    description: "MyReads, an app that lets you track books you've read, books you are currently reading, and want to read! Awesome right? This web application consists of three shelve categories labeled as ‘Currently Reading’, ‘Want To Read’, and ‘Read’. When you have finished a book that you have on your ‘Currently Reading’ shelf, there’s a drop down icon that allows you to move that book into any of the other two shelves provided, as well as an option to delete the book entirely. To access the search page click the search icon in the bottom right corner. Search results show up automatically as the as you type.",
    techUsed: 'React, JavaScript, Babel, HTML5, CSS3, Udacity’s custom api, AWS S3.',
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
    id: 'Jamming',
    name: 'Jamming',
    datePosted: 'May 8, 2018',
    image: jammingImg,
    shortDescripion: 'Create new playlists for your Spotify account',
    description: 'Jamming is used with the Spotify API. To use this app you will need to login with your spotify account. The first feature you will see is the search input field where you can type in a name of an artist or song to get a list of songs from Spotify. You can add songs to the ‘new playlist’ feature, give that playlist a name, and save it directly to your Spotify account. Further down the page shows all your current playlists and songs on Spotify. Every track has an audio feature to play a thirty second preview. All you have to do is click on the image! Songs that do not contain audio will show a disabled icon on hover. Enjoy!',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Spotify Web API, AWS S3.',
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
    datePosted: 'April 28, 2018',
    image: devourImg,
    shortDescripion: 'Hungry?... Use devour to find great resturaunts near you',
    description: 'devour’ lets you search for businesses using the Yelp API. The first search field is for the name of a company, type of company, or general input such as ‘food near me’. The second search field is for the desired location. Search results show all relevant businesses with their cover photo, name, street address, business type, overall ratings on Yelp, number of reviews, and the overall price based on how many cash emojis are presented. If you are trying to find something local, researching the best eats, or even looking for a fun interactive experience, then look no further! You will find everything you desire in this web application!',
    techUsed: 'React, JavaScript, Babel, Webpack, HTML5, CSS3, Yelp Web API, AWS S3.',
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
  return new Promise((res) => res({posts: posts}));
}
