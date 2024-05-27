document.addEventListener('DOMContentLoaded', function () {
    const profilePicture = document.getElementById('ProfilePicture');
    const buttons = document.querySelectorAll('.image-button');
    
    // Load the saved image from local storage if it exists
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profilePicture.style.backgroundImage = `url('${savedImage}')`;
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const image = button.getAttribute('data-image');
            profilePicture.style.backgroundImage = `url('${image}')`;
            localStorage.setItem('profileImage', image);
        });
    });
});
