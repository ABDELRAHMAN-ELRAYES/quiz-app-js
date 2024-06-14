let startBtn = document.querySelector('.btn');
let closeBtn = document.querySelector('.start-btn');
let overlay = document.querySelector('.overlay');
let modalWindow = document.querySelector('.modal-window');
let userNameInput = document.querySelector('.user-name');
let userName = document.querySelector('.name');
// let animationCards = document.querySelectorAll('.inner-content-down');
let nxtBtn = document.querySelector('.btn-nxt');
let prvBtn = document.querySelector('.btn-prv');
let counter = document.querySelector('.counter');
let videoPlayer = document.querySelector('.video-player');
let videoSrc = document.querySelector('.video-src');
let animationImage = document.querySelector('.content-right');
/* close the overlay and modal window */
// console.log(videoSrc.src);
const walle = {
  video: '/videos/walle.mp4',
  image: '/images/walle.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const coco = {
  video: '/videos/coco.mp4',
  image: '/images/coco.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const elemental = {
  video: '/videos/elemental.mp4',
  image: '/images/elemental.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const kraken = {
  video: '/videos/kraken.mp4',
  image: '/images/kraken.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const leo = {
  video: '/videos/leo.mp4',
  image: '/images/leo.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const migration = {
  video: '/videos/migration.mp4',
  image: '/images/migration.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const miraculous = {
  video: '/videos/miraculous.mp4',
  image: '/images/miraculous.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const paw = {
  video: '/videos/paw.mp4',
  image: '/images/paw.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const spyXfamily = {
  video: '/videos/spyXfamily.mp4',
  image: '/images/spyXfamily.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const theMonkeyKing = {
  video: '/videos/theMonkeyKing.mp4',
  image: '/images/theMonkeyKing.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
const trolls = {
  video: '/videos/trolls.mp4',
  image: '/images/trolls.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};

const wish = {
  video: '/videos/wish.mp4',
  image: '/images/wish.jpg',
  chooseOne: 'what is your name ?',
  chooseTwo: 'what is this about?',
  chooseThree: 'are you okay?',
};
let animations = [
  walle,
  coco,
  elemental,
  kraken,
  leo,
  migration,
  miraculous,
  paw,
  spyXfamily,
  theMonkeyKing,
  trolls,
  wish,
];

closeBtn.addEventListener('click', () => {
  if (userNameInput.value !== '') {
    userName.textContent = userNameInput.value;
    overlay.classList.toggle('hidden');
    modalWindow.classList.toggle('hidden');
  }
});

let previousAnimationCard = 11;
let questionCounter = 0;
// nxtBtn.forEach(btn => {
//   btn.addEventListener('click', () => {
//     // const randomAnimation = Math.trunc(Math.random() * 12) + 1;
//     counter.textContent = questionCounter;
//     animationCards.forEach(animationCard => {
//       const className = animationCard.classList;
//       if (className.contains(`animation-card${questionCounter}`)) {
//         animationCard.classList.remove('hidden');
//       } else {
//         animationCard.classList.add('hidden');
//       }
//     });
//     if (questionCounter === 1) previousAnimationCard = 12;
//     else previousAnimationCard = questionCounter - 1;
//     if (questionCounter + 1 > 12) questionCounter = 1;
//     else questionCounter++;
//   });
// });

// prvBtn.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log(previousAnimationCard);
//     animationCards.forEach(animationCard => {
//       const className = animationCard.classList;
//       if (className.contains(`animation-card${previousAnimationCard}`)) {
//         animationCard.classList.remove('hidden');
//       } else {
//         animationCard.classList.add('hidden');
//       }
//     });
//     if (previousAnimationCard - 1 === 0) previousAnimationCard = 12;
//     else previousAnimationCard--;
//   });
// });
nxtBtn.addEventListener('click', () => {
  counter.textContent = questionCounter + 1;
  if (questionCounter === 1) previousAnimationCard = 12;
  else previousAnimationCard = questionCounter - 1;
  if (questionCounter + 1 > 12) questionCounter = 1;
  else questionCounter++;
  let animation = animations[questionCounter];
  videoSrc.src = animation.video;
  videoPlayer.load();
  animationImage.style.background = `url(${animation.image})`;
  animationImage.style.backgroundSize = 'cover';
  animationImage.style.backgroundRepeat = 'no-repeat';
  animationImage.style.backgroundPosition = 'bottom center';
  //   videoPlayer.play();
  //   console.log(videoSrc.src);
});
prvBtn.addEventListener('click', () => {
  if (previousAnimationCard - 1 === 0) previousAnimationCard = 12;
  else previousAnimationCard--;
  let animation = animations[questionCounter];
  videoSrc.src = animation.video;
  videoPlayer.load();
  animationImage.style.background = `url(${animation.image})`;
  animationImage.style.backgroundSize = 'cover';
  animationImage.style.backgroundRepeat = 'no-repeat';
  animationImage.style.backgroundPosition = 'bottom center';
});
