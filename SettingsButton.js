document.addEventListener("DOMContentLoaded", function () {
  const settingsBtn = document.querySelector('.Settings');
  const settingsBox = document.getElementById('settings-box');

  settingsBtn.addEventListener('click', function () {
    if (settingsBox.style.display === 'none' || settingsBox.style.display === '') {
      settingsBox.style.display = 'block';
    } else {
      settingsBox.style.display = 'none';
    }
  });

  // Adding test buttons to the settings box
  const testButtons = ['Settings', 'Profile picture', 'Log out'];

  testButtons.forEach(function (text) {
    const button = document.createElement('button');
    button.textContent = text;
    settingsBox.appendChild(button);

    // Add event listener to each button to redirect to index.html
    if (text === 'Log out') {
      button.addEventListener('click', function () {
        window.location.href = 'index.html';
      });
    }
    if (text === 'Settings') {
      button.addEventListener('click', function () {
        window.location.href = 'ColorSettings.html';
      });
    }
    if (text === 'Profile picture') {
      button.addEventListener('click', function () {
        window.location.href = 'ProfilbildeSettings.html';
      });
    }
  });
});
