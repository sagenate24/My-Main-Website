import { scroller } from 'react-scroll';

export const scrollToElement = (projectId, offset) => {
  scroller.scrollTo(projectId, {
    duration: 800,
    delay: 100,
    spy: true,
    smooth: true,
    offset: offset
  })
}
