const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function changeImage() {
    cards[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add('show');
}

setInterval(changeImage, 3000);
cards[currentIndex].classList.add('show');
