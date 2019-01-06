export const isPassive = () => {
  let supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) { }

    return supportsPassive;
}
