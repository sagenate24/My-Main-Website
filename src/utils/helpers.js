import { getMe, getPosts, getContactInfo } from './Data';
import { getLanguagesInfo } from './LangData';

export const handleInitialData = () => {
 return Promise.all([
   getMe(),
   getPosts(),
   getContactInfo(),
   getLanguagesInfo(),
 ]).then(([aboutMe, posts, contactInfo, languages]) => ({
   aboutMe,
   posts,
   contactInfo,
   languages,
 }));
}
