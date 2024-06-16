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
let chooseBtnOne = document.querySelector('.chooseOne');
let chooseBtnTwo = document.querySelector('.chooseTwo');
let chooseBtnThree = document.querySelector('.chooseThree');
let chooseBtn = document.querySelectorAll('.btn-choose');

let scoreModalWindow = document.querySelector('.modal-window-score');
let scoreOverlay = document.querySelector('.overlay-score');
let grateWord = document.querySelector('.grate-word');
let scorerName = document.querySelector('.scorer-name');
let newTrialBtn = document.querySelector('.new-trial-btn');
let closeScore = document.querySelector('.close-score');
let scorePos = document.querySelector('.score-pos');
/* close the overlay and modal window */
// console.log(videoSrc.src);
const walle = {
  video: '/videos/walle.mp4',
  image: '/images/walle.jpg',
  answered: false,
  chooseOne:
    'His name is walle.after all these years he is deleveloped one little glitch a personality he is extremely curious and just a little bit lonely but all that is about to change.', //
  chooseTwo:
    'All right who be there.i am sorry. welcome to the land of ancestors,when your family the skeletons, you must get home before sunrise or you be stock here forever,security .you my boy i meant to be musician.',
  chooseThree:
    'No animal watch the be of life time.i wasted my life,this year every student have to take home a class turtle.this my shock. are you not .good zone. bad rough godzeilla .what was that ,you are just talk.mom ,...no.why do your hands there? they are naturally moised',
};
const coco = {
  video: '/videos/coco.mp4',
  image: '/images/coco.jpg',
  answered: false,
  chooseOne:
    'Meet the residence of elements city,air usually has a hair on the clouds ,ooh my jacket.earth can be a little theory.no one going on here ,just a little browning water is always get on a something.help!.and fire ,as ordered we will a little hot. is a subiest dream of our family.',
  chooseTwo:
    'All right who be there.i am sorry. welcome to the land of ancestors,when your family the skeletons, you must get home before sunrise or you be stock here forever,security .you my boy i meant to be musician.', //
  chooseThree:
    'No animal watch the be of life time.i wasted my life,this year every student have to take home a class turtle.this my shock. are you not .good zone. bad rough godzeilla .what was that ,you are just talk.mom ,...no.why do your hands there? they are naturally moised',
};
const elemental = {
  video: '/videos/elemental.mp4',
  image: '/images/elemental.jpg',
  answered: false,
  chooseOne:
    'His name is walle.after all these years he is deleveloped one little glitch a personality he is extremely curious and just a little bit lonely but all that is about to change.',
  chooseTwo:
    'All right who be there.i am sorry. welcome to the land of ancestors,when your family the skeletons, you must get home before sunrise or you be stock here forever,security .you my boy i meant to be musician.',
  chooseThree:
    'Meet the residence of elements city,air usually has a hair on the clouds ,ooh my jacket.earth can be a little theory.no one going on here ,just a little browning water is always get on a something.help!.and fire ,as ordered we will a little hot. is a subiest dream of our family.  ', //
};
const kraken = {
  video: '/videos/kraken.mp4',
  image: '/images/kraken.jpg',
  answered: false,
  chooseOne:
    'No animal watch the be of life time.i wasted my life,this year every student have to take home a class turtle.this my shock. are you not .good zone. bad rough godzeilla .what was that ,you are just talk.mom ,...no.why do your hands there? they are naturally moised',
  chooseTwo:
    'I can make a freek ,i just wanna be pretty girl not just almost teenager.this is funny.nice,you are powers you argue imagination, you are the protatirabe of all ocean creatures.it is up to you,but people love mermates,of course they do ,people are stupid.', //
  chooseThree:
    'All right who be there.i am sorry. welcome to the land of ancestors,when your family the skeletons, you must get home before sunrise or you be stock here forever,security .you my boy i meant to be musician.',
};
const leo = {
  video: '/videos/leo.mp4',
  image: '/images/leo.jpg',
  answered: false,
  chooseOne:
    'No animal watch the be of life time.i wasted my life,this year every student have to take home a class turtle.this my shock. are you not .good zone. bad rough godzeilla .what was that ,you are just talk.mom ,...no.why do your hands there? they are naturally moised', //
  chooseTwo:
    'All right who be there.i am sorry. welcome to the land of ancestors,when your family the skeletons, you must get home before sunrise or you be stock here forever,security .you my boy i meant to be musician.',
  chooseThree:
    'Meet the residence of elements city,air usually has a hair on the clouds ,ooh my jacket.earth can be a little theory.no one going on here ,just a little browning water is always get on a something.help!.and fire ,as ordered we will a little hot. is a subiest dream of our family.  ',
};
const migration = {
  video: '/videos/migration.mp4',
  image: '/images/migration.jpg',
  answered: false,
  chooseOne:
    "What is this place?.we have completely lost .which height did you make it. don't worry jump scatcha ,so listen chub .what did you just call me ?sorry, i don't know with jump.so, listen chub ,what did you just call me.else you aren't chub",
  chooseTwo:
    "The most magical kingdom. founded by a king with the power to grant wishes.you are the handsomest most beloved king.you are right, i'm a handsome king. time sooner i am going to be exployed. my best friend is the king of brightness.my mouse troubling ,i feel like stupid. Asha come with me .the wishes have roses. ",
  chooseThree: walle.chooseOne,
};
const miraculous = {
  video: '/videos/miraculous.mp4',
  image: '/images/miraculous.jpg',
  answered: false,
  chooseOne: elemental.chooseThree,
  chooseTwo: kraken.chooseTwo,
  chooseThree:
    "I don't understand what is happening ,he is to miraculous .you know ,didn't .bonjour ,names catnoir .what do you suppose to be ?.a watermelon?!..excuse me .i am the new hero on our town to save the world.ruuuun....it's time ",
};
const paw = {
  video: '/videos/paw.mp4',
  image: '/images/paw.jpg',
  answered: false,
  chooseOne:
    'His name is walle.after all these years he is deleveloped one little glitch a personality he is extremely curious and just a little bit lonely but all that is about to change.',
  chooseTwo:
    "It's so fun.wow wow wow , i'm danner .you looks different than i remember.oh like puppy .quite times over.they throw begin one of us.you will begin all of us.let's gooo...",
  chooseThree:
    "The most magical kingdom. founded by a king with the power to grant wishes.you are the handsomest most beloved king.you are right, i'm a handsome king. time sooner i am going to be exployed. my best friend is the king of brightness.my mouse troubling ,i feel like stupid. Asha come with me .the wishes have roses. ",
};
const spyXfamily = {
  video: '/videos/spyXfamily.mp4',
  image: '/images/spyXfamily.jpg',
  answered: false,
  chooseOne:
    'He is bad lied, did i just see him? kiss her?!! who is there ?. my flower definition will tell me where you are hiding anywhere ?.',
  chooseTwo:
    "What is this place?.we have completely lost .which height did you make it. don't worry jump scatcha ,so listen chub .what did you just call me ?sorry, i don't know with jump.so, listen chub ,what did you just call me.else you aren't chub",
  chooseThree:
    'All right who be there.i am sorry. welcome to the land of ancestors,when your family the skeletons, you must get home before sunrise or you be stock here forever,security .you my boy i meant to be musician.',
};
const theMonkeyKing = {
  video: '/videos/theMonkeyKing.mp4',
  image: '/images/theMonkeyKing.jpg',
  answered: false,
  chooseOne:
    'No animal watch the be of life time.i wasted my life,this year every student have to take home a class turtle.this my shock. are you not .good zone. bad rough godzeilla .what was that ,you are just talk.mom ,...no.why do your hands there? they are naturally moised',
  chooseTwo:
    "Spectacular revegue benor,ooh man ..!.fine. i often do myself.name Monkey King .this here is stick my trust is complete in.they all once told me,you talk belong it outside here and he was right.i don't belong here ?! i belong to emortal one.Never accept you. i will become legendary, after accepting me.   ",
  chooseThree:
    'Meet the residence of elements city,air usually has a hair on the clouds ,ooh my jacket.earth can be a little theory.no one going on here ,just a little browning water is always get on a something.help!.and fire ,as ordered we will a little hot. is a subiest dream of our family.  ',
};
const trolls = {
  video: '/videos/trolls.mp4',
  image: '/images/trolls.jpg',
  answered: false,
  chooseOne:
    'His name is walle.after all these years he is deleveloped one little glitch a personality he is extremely curious and just a little bit lonely but all that is about to change.',
  chooseTwo:
    "I don't understand what is happening ,he is to miraculous .you know ,didn't .bonjour ,names catnoir .what do you suppose to be ?.a watermelon?!..excuse me .i am the new hero on our town to save the world.ruuuun....it's time ",
  chooseThree:
    'Remembered every world and every step. when i want you back. still gather .perfect perfect perfect....',
};

const wish = {
  video: '/videos/wish.mp4',
  image: '/images/wish.jpg',
  answered: false,
  chooseOne:
    'He is bad lied, did i just see him? kiss her?!! who is there ?. my flower definition will tell me where you are hiding anywhere ?.',
  chooseTwo:
    'No animal watch the be of life time.i wasted my life,this year every student have to take home a class turtle.this my shock. are you not .good zone. bad rough godzeilla .what was that ,you are just talk.mom ,...no.why do your hands there? they are naturally moised',
  chooseThree:
    "The most magical kingdom. founded by a king with the power to grant wishes.you are the handsomest most beloved king.you are right, i'm a handsome king. time sooner i am going to be exployed. my best friend is the king of brightness.my mouse troubling ,i feel like stupid. Asha come with me .the wishes have roses. ",
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
let animationsMap = new Map([
  [walle, 'chooseOne'],
  [coco, 'chooseTwo'],
  [elemental, 'chooseThree'],
  [kraken, 'chooseTwo'],
  [leo, 'chooseOne'],
  [migration, 'chooseOne'],
  [miraculous, 'chooseThree'],
  [paw, 'chooseTwo'],
  [spyXfamily, 'chooseOne'],
  [theMonkeyKing, 'chooseTwo'],
  [trolls, 'chooseThree'],
  [wish, 'chooseThree'],
]);

let score = 0;
let currentAnimation = walle;

newTrialBtn.addEventListener('click', makeNewTrial);
animations.forEach(animat => {
  if (animat === currentAnimation) {
    chooseBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        let classNames = btn.classList;
        console.log(currentAnimation['answered']);
        console.log(animationsMap.get(currentAnimation), classNames[2]);
        if (!currentAnimation['answered']) {
          if (animationsMap.get(currentAnimation) === classNames[2]) {
            score++;
            btn.style.backgroundColor = '#3deb79a3';
          } else {
            btn.style.backgroundColor = '#ff313187';
          }
          currentAnimation['answered'] = true;
        } else {
          if (animationsMap.get(currentAnimation) === classNames[2]) {
            btn.style.backgroundColor = '#3deb79a3';
          } else {
            btn.style.backgroundColor = '#ff313187';
          }
        }
      });
    });
  }
});
function returnBtnColor() {
  chooseBtn.forEach(btn => {
    btn.style.backgroundColor = '#002233a8';
  });
}
function returnAnsweredAnimation(animate) {
  if (animate['answered']) {
    chooseBtn.forEach(btn => {
      let classNames = btn.classList;
      if (animationsMap.get(animate) === classNames[2]) {
        btn.style.backgroundColor = '#3deb79a3';
      } else {
        btn.style.backgroundColor = '#ff313187';
      }
    });
  }
}
let questionCounter = 0;
function changeAnimationCard(anima) {
  currentAnimation = anima;
  returnBtnColor();
  videoSrc.src = anima.video;
  videoPlayer.load();
  chooseBtnOne.textContent = anima.chooseOne;
  chooseBtnTwo.textContent = anima.chooseTwo;
  chooseBtnThree.textContent = anima.chooseThree;
  animationImage.style.background = `url(${anima.image})`;
  animationImage.style.backgroundSize = 'cover';
  animationImage.style.backgroundRepeat = 'no-repeat';
  animationImage.style.backgroundPosition = 'bottom center';
}

nxtBtn.addEventListener('click', () => {
  if (questionCounter + 1 > 11) {
    questionCounter = 0;
    showScore();
  } else questionCounter++;
  counter.textContent = questionCounter + 1;
  let animation = animations[questionCounter];
  changeAnimationCard(animation);
  returnAnsweredAnimation(animation);
  //   videoPlayer.play();
});

prvBtn.addEventListener('click', () => {
  if (questionCounter - 1 < 0) questionCounter = 11;
  else questionCounter--;
  counter.textContent = questionCounter + 1;
  let animation = animations[questionCounter];
  changeAnimationCard(animation);
  returnAnsweredAnimation(animation);
});
closeBtn.addEventListener('click', () => {
  if (userNameInput.value !== '') {
    userName.textContent = userNameInput.value;
    overlay.classList.toggle('hidden');
    modalWindow.classList.toggle('hidden');
  }
});
function closeScoreModal() {
  scoreModalWindow.classList.add('hidden');
  scoreOverlay.classList.add('hidden');
}
closeScore.addEventListener('click', () => {
  closeScoreModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeScoreModal();
  }
});
scoreOverlay.addEventListener('click', () => {
  closeScoreModal();
});
function showScore() {
  scoreOverlay.classList.remove('hidden');
  scoreModalWindow.classList.remove('hidden');
  grateWord.textContent = score >= 6 ? 'Congratulations!.' : "I'm sorry!.";
  scorerName.textContent = userNameInput.value;
  scorePos.textContent = score;
}
function makeNewTrial() {
  closeScoreModal();
  overlay.classList.toggle('hidden');
  modalWindow.classList.toggle('hidden');
  score = 0;
  animations.forEach(animation => {
    animation['answered'] = false;
  });
  returnBtnColor();
}
