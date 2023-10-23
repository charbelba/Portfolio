const backgroundDiv = document.querySelector('.container-hero');
console.log(backgroundDiv, 'hello'); // Corrected the console.log statement

const imageUrls = ['images/gradient 1.png', 'images/gradient 1 (2).png']; // Corrected image URLs
let currentImageIndex = 0;

function changeBackground() {
  backgroundDiv.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Call the changeBackground function every 5 seconds (adjust the interval as needed)
setInterval(changeBackground, 5000);



function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

const textElement = document.querySelector('.hero-name');
const text = "Charbel Bou Abdo";

function typeText() {
    textElement.textContent = '';
    let i = 0;
    const typeInterval = setInterval(function () {
        textElement.textContent += text[i];
        i++;
        if (i > text.length ) {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Call typeText to fill in the text
typeText();



