var sideMenu = document.getElementById("sideMenu");
var menuToggle = document.getElementById("menuToggle");
var suggestionsTimer; // Global variable to store the timer for hiding suggestions

// Function to handle scroll event
function handleScroll() {
    var scrollPosition = window.scrollY;

    // Check if side menu is open
    var isMenuOpen = sideMenu.style.width === "250px" || sideMenu.style.width === "500px" || sideMenu.style.width === "100px";

    // If scroll position is greater than 100px from the top, make side menu visible and openable
    if (scrollPosition > 100) {
        sideMenu.style.visibility = "visible";
        menuToggle.style.visibility = "visible";
    } else {
        // Otherwise, make side menu invisible and unopenable
        sideMenu.style.visibility = "hidden";
        menuToggle.style.visibility = "hidden";

        // Close the side menu if it's open
        if (isMenuOpen) {
            sideMenu.style.width = "0";
            menuToggle.innerHTML = "&#9776; Menu"; // Change the menu button text/icon
        }
    }
}

// Add scroll event listener to window
window.addEventListener("scroll", handleScroll);

// Function to toggle side menu
function toggleSideMenu() {
    if (sideMenu.style.width === "250px" || sideMenu.style.width === "500px" || sideMenu.style.width === "100px") {
        sideMenu.style.width = "0";
        menuToggle.innerHTML = "&#9776; Menu"; // Change the menu button text/icon
    } else {
        adjustSideMenuWidth(); // Adjust side menu width based on screen size when opening
        menuToggle.innerHTML = "Close"; // Change the menu button text/icon
    }
}

// Add click event listener to menu toggle button
menuToggle.addEventListener("click", toggleSideMenu);

function showSuggestions() {
    clearTimeout(suggestionsTimer); // Clear any existing timer
    var suggestions = document.getElementById("suggestions");
    suggestions.style.display = "block";
}

function hideSuggestions() {
    suggestionsTimer = setTimeout(function() {
        var suggestions = document.getElementById("suggestions");
        if (window.innerWidth >= 500) {
            suggestions.style.display = "none";
        }
    }, 500); // Set a timer to hide suggestions after 500 milliseconds (adjust as needed)
}

function cancelHideSuggestions() {
    clearTimeout(suggestionsTimer); // Clear the timer to prevent hiding suggestions
}

// Adjust side menu width based on screen size
function adjustSideMenuWidth() {
    var screenWidth = window.innerWidth;
    if (screenWidth >= 2200) {
        sideMenu.style.width = "500px";
    } else if (screenWidth >= 500) {
        sideMenu.style.width = "250px";
    } else {
        sideMenu.style.width = "100px";
    }
}

// Call adjustSideMenuWidth initially and on window resize
adjustSideMenuWidth();
window.addEventListener("resize", adjustSideMenuWidth);

// Initialize side menu to be hidden
sideMenu.style.visibility = "hidden";
menuToggle.style.visibility = "hidden";
sideMenu.style.width = "0";

// Call handleScroll initially to set correct visibility based on initial scroll position
handleScroll();
