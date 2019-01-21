import { scroller } from 'react-scroll';

export const isPassive = () => {
  let supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function () {
        return supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) { }

  return supportsPassive;
}

export const scrollToElement = (projectId, offset) => {
  scroller.scrollTo(projectId, {
    duration: 800,
    delay: 100,
    spy: true,
    smooth: true,
    offset: offset
  })
}
