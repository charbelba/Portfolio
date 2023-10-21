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
        if (i > text.length) {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Call typeText to fill in the text
typeText();
