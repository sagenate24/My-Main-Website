import { getPosts, getContactInfo, getEducationData } from './Data';
import { getLanguagesInfo } from './LangData';

export const handleInitialData = () => {
 return Promise.all([
   getPosts(),
   getContactInfo(),
   getLanguagesInfo(),
   getEducationData(),
 ]).then(([posts, contactInfo, languages, education]) => ({
   posts,
   contactInfo,
   languages,
   education,
 }));
}

// export function sendMessage(userId, email, callback) {
//   // Using the js-base64 library for encoding:
//   // https://www.npmjs.com/package/js-base64
//   var base64EncodedEmail = Base64.encodeURI(email);
//   var request = gapi.client.gmail.users.messages.send({
//     'userId': userId,
//     'resource': {
//       'raw': base64EncodedEmail
//     }
//   });
//   request.execute(callback);
// }
