import { getMe, getPosts, getContactInfo, getEducationData } from './Data';
import { getLanguagesInfo } from './LangData';

export const handleInitialData = () => {
 return Promise.all([
   getMe(),
   getPosts(),
   getContactInfo(),
   getLanguagesInfo(),
   getEducationData(),
 ]).then(([aboutMe, posts, contactInfo, languages, education]) => ({
   aboutMe,
   posts,
   contactInfo,
   languages,
   education,
 }));
}
