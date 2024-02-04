const div = document.querySelector('.yes-div');
const title = document.querySelector('#title');
const askDiv = document.querySelector('.ask-div');
const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');
const phrases = [
    'Are you sure?',
    'Are you really sure?',
    'Think about it',
    'Last chance',
    '...or maybe not',
    'We\'ll listen good music',
    'I\'ll buy you a donut',
    'I\'ll be sad',
    'I\'ll be very sad',
    'Ok, I\'ll stop asking...',
    '...no I won\'t',
    'Won\'t you reconsider?',
    'You may regret it',
    'I\'ll buy you a donut and an ice cream',
    'I\'ll be very very sad',
    'Y si lo hago en español?',
    'Dime que sí',
    'O italiano?',
    'Dimmi di sì',
]
let saidYes = false;
let noCount = 0;

yesBtn.addEventListener('click', () => {
    saidYes = true;
    div.classList.add('show');
    askDiv.classList.add('hide');
    title.textContent = 'Yay! I knew you would say yes!';
});

noBtn.addEventListener('click', () => {
    const phrase = phrases[Math.min(noCount, phrases.length - 1)];
    noBtn.textContent = phrase;
    
    noCount++;
});

