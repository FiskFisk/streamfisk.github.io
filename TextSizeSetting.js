// FontSizeSwitch.js

function setFontSize(size) {
    let fontSize;
    if (size === 'small') {
        fontSize = '10px';
    } else if (size === 'medium') {
        fontSize = '20px';
    } else if (size === 'large') {
        fontSize = '30px'; // Changed from 20px to 24px for better distinction
    }
    document.documentElement.style.setProperty('--main-font-size', fontSize);

    // Save the selected font size in local storage
    localStorage.setItem('selectedFontSize', size);

    console.log('Font size set to:', size);
}

function applySavedFontSize() {
    const savedFontSize = localStorage.getItem('selectedFontSize');
    if (savedFontSize) {
        setFontSize(savedFontSize);
        console.log('Applying saved font size:', savedFontSize);
    } else {
        console.log('No saved font size found in local storage.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    applySavedFontSize();
});

window.addEventListener('storage', function (event) {
    if (event.key === 'selectedFontSize') {
        applySavedFontSize();
    }
});
