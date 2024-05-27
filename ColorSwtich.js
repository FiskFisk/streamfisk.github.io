let sideMenuMode = 'color'; // Default side menu mode

function setColors(b1, b2, logo, logo2, logo3, sm) {
    console.log('Setting colors:', { b1, b2, logo, logo2, logo3, sm });

    document.documentElement.style.setProperty('--main-b1-color', b1);
    document.documentElement.style.setProperty('--main-b2-color', b2);

    // Determine the side menu color based on the current mode
    let sideMenuColor;
    if (sideMenuMode === 'dark') {
        sideMenuColor = '#000000';
    } else if (sideMenuMode === 'light') {
        sideMenuColor = '#E0E0E0';
    } else {
        sideMenuColor = sm;
    }
    document.documentElement.style.setProperty('--side-menu-color', sideMenuColor);

    // Change background images for logos
    const seriesLogo = document.querySelector('.Series_Logo');
    const moviesLogo = document.querySelector('.Movies_Logo');
    const favoritesLogo = document.querySelector('.Favorites_Logo');

    if (seriesLogo && moviesLogo && favoritesLogo) {
        seriesLogo.style.backgroundImage = `url(${logo})`;
        moviesLogo.style.backgroundImage = `url(${logo2})`;
        favoritesLogo.style.backgroundImage = `url(${logo3})`;

        // Save the colors and side menu mode in local storage
        const colors = { b1, b2, logo, logo2, logo3, sm };
        localStorage.setItem('selectedColors', JSON.stringify(colors));
        localStorage.setItem('sideMenuMode', sideMenuMode);

        console.log('Saved to localStorage:', { colors, sideMenuMode });

        const colorChangeEvent = new Event('colorChange');
        window.dispatchEvent(colorChangeEvent);
    } else {
        console.error('One or more logo elements not found in the DOM.');
    }
}

function isCurrentColor(b1, b2, logo, logo2, logo3) {
    const seriesLogo = document.querySelector('.Series_Logo');
    const moviesLogo = document.querySelector('.Movies_Logo');
    const favoritesLogo = document.querySelector('.Favorites_Logo');

    return (
        getComputedStyle(document.documentElement).getPropertyValue('--main-b1-color').trim() === b1 &&
        getComputedStyle(document.documentElement).getPropertyValue('--main-b2-color').trim() === b2 &&
        seriesLogo && seriesLogo.style.backgroundImage === `url("${logo}")` &&
        moviesLogo && moviesLogo.style.backgroundImage === `url("${logo2}")` &&
        favoritesLogo && favoritesLogo.style.backgroundImage === `url("${logo3}")`
    );
}

function TurnColor(b1, b2, logo, logo2, logo3, sm) {
    if (!isCurrentColor(b1, b2, logo, logo2, logo3)) {
        setColors(b1, b2, logo, logo2, logo3, sm);
    }
}

function TurnBlue() {
    TurnColor('#00459e', '#0057C9', 'LogoBlue.svg', 'Logo2Blue.svg', 'Logo3Blue.svg', '#002a6e');
}

function TurnRed() {
    TurnColor('#940F00', '#CF1500', 'LogoRed.svg', 'Logo2Red.svg', 'Logo3Red.svg', '#5e0900');
}

function TurnGreen() {
    TurnColor('#109602', '#17D102', 'LogoGreen.svg', 'Logo2Green.svg', 'Logo3Green.svg', '#086402');
}

function TurnYellow() {
    TurnColor('#BFB600', '#E0D500', 'LogoYellow.svg', 'Logo2Yellow.svg', 'Logo3Yellow.svg', '#7f7e00');
}

function TurnWhite() {
    TurnColor('#FFFFFF', '#FFFFFF', 'LogoWhite.svg', 'Logo2White.svg', 'Logo3White.svg', '#E0E0E0');
}

function TurnBlack() {
    TurnColor('#333333', '#000000', 'LogoBlack.svg', 'Logo2Black.svg', 'Logo3Black.svg', '#000000');
}

function setSideMenuDark() {
    sideMenuMode = 'dark';
    applySavedColors();
}

function setSideMenuLight() {
    sideMenuMode = 'light';
    applySavedColors();
}

function setSideMenuColor() {
    sideMenuMode = 'color';
    applySavedColors();
}

function applySavedColors() {
    const savedColors = localStorage.getItem('selectedColors');
    if (savedColors) {
        const { b1, b2, logo, logo2, logo3, sm } = JSON.parse(savedColors);
        console.log('Applying saved colors:', { b1, b2, logo, logo2, logo3, sm });
        setColors(b1, b2, logo, logo2, logo3, sm);
    } else {
        console.log('No saved colors found in local storage. Applying default blue theme.');
        TurnBlue(); // Apply the default blue theme if no colors are saved
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const savedSideMenuMode = localStorage.getItem('sideMenuMode');
    if (savedSideMenuMode) {
        sideMenuMode = savedSideMenuMode;
        console.log('Loaded side menu mode from local storage:', sideMenuMode);
    } else {
        console.log('No side menu mode found in local storage. Using default:', sideMenuMode);
    }
    applySavedColors();
});

window.addEventListener('storage', function (event) {
    if (event.key === 'selectedColors' || event.key === 'sideMenuMode') {
        const savedSideMenuMode = localStorage.getItem('sideMenuMode');
        if (savedSideMenuMode) {
            sideMenuMode = savedSideMenuMode;
            console.log('Updated side menu mode from storage event:', sideMenuMode);
        }
        applySavedColors();
    }
});
