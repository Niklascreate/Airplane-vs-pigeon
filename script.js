let character = document.querySelector('#character');
let block = document.querySelector('#block');
let counter = 0;
let jumpSoundRef = document.querySelector('#jumpSound');
let explosionSoundRef = document.querySelector('#explosionSound');
let gameStartSoundRef = document.querySelector('#gameStartSound');



function jump(event) {
    if (event.code === 'Space' && !character.classList.contains('animate')) {
        character.classList.add('animate');
        jumpSoundRef.play();
        setTimeout(function () {
            character.classList.remove('animate');
        }, 300);
    }
}
document.addEventListener('keydown', jump);

let checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 45 && blockLeft > -45 && characterTop >= 130) {
        block.style.animation = 'none';
        explosionSoundRef.play();
        alert('Planet kraschade. Du fick poäng: ' + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = 'block 1s infinite linear';
    } else {
        counter++;
        document.querySelector('#scoreSpan').innerHTML = Math.floor(counter / 100);
    }
}, 10);
