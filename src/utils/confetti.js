let confettiArr = [];
let animateFettiId;
let animateFettiOutId;

class Character {
  constructor(element) {
    this.position = { x: Math.random() * window.innerWidth, y: 0 };
    this.startingTime = Date.now();
    this.opacity = 1;
    this.acceleration = Math.random() * 1.2;
    this.element = element;
    this.speed = -100;
    this.degSpeed = Math.random() * 1;
  }

  update() {
    const maxHeight = window.innerHeight;

    if (this.startingTime === null) {
      this.startingTime = Date.now();
    }

    if (this.startingTime >= 1800) {
      this.opacity -= 0.01;
    }

    if (this.position.y > maxHeight || this.opacity < 0) {
      removeFetti(this.element);
    }

    this.degSpeed += this.acceleration;
    this.speed += this.degSpeed;
    this.position.y = this.speed;
    this.position.x += 1;
  }

  remove() {
    this.element.parentNode.removeChild(this.element);
  }

  render() {
    this.element.style.left = `${this.position.x}px`;
    this.element.style.top = `${this.position.y}px`;
    this.element.style.opacity = this.opacity;
  }
}

const removeFetti = (fetti) => {
  confettiArr = confettiArr.filter((item) => {
    if (item.element === fetti) {
      fetti.remove();
      return false;
    }
    return true;
  });

  if (confettiArr.length === 0) {
    removeConfetti();
  }
}

function generateFettis(container) {
  for (var i = 0; i < 100; i++) {
    const fetti = document.createElement('div');
    const colorsArr = ['#FFFF00', '#FF0000', '#FF6600', '#00FF00', '#00FFFF', '#0033FF', '#FF00FF', '#CC00FF', '#00FF66', '#9900FF'];
    const randomIndex = Math.floor(Math.random() * colorsArr.length - 1);

    Object.assign(fetti.style, {
      backgroundColor: `${colorsArr[randomIndex]}`,
      position: 'fixed',
      left: '0px',
      top: '0px',
      height: '3px',
      width: '6px',
      opacity: 1,
      borderRadius: '2px',
      border: `2px solid ${colorsArr[randomIndex]}`,
    });
    
    container.appendChild(fetti);

    confettiArr.push(new Character(fetti));
  }

  animate();
}

function animate() {
  if (animateFettiId) {
    window.cancelAnimationFrame(animateFettiId);
  }
  confettiArr.forEach(item => item.update());
  confettiArr.forEach(item => item.render());
  animateFettiId = window.requestAnimationFrame(animate);
}

function removeConfetti() {
  window.cancelAnimationFrame(animateFettiOutId);
  window.cancelAnimationFrame(animateFettiId);
}

export const generateConfettiAnimation = (container) => {
    generateFettis(container)
}
