const banners = [
    "./images/banner1.png",
    "./images/banner2.png",
    "./images/banner3.png"
  ];
  
  let currentBannerIndex = 0;
  const bannerImage = document.getElementById("ad-image");

const menuIcon = document.getElementById('menu-icon');
const settingsIcon = document.getElementById('settings-icon');
const menuWindow = document.getElementById('menu-window');
const settingsWindow = document.getElementById('settings-window');

menuIcon.addEventListener('click', () => {
  console.log("Menu icon clicked");
  menuWindow.classList.toggle('show');
});

settingsIcon.addEventListener('click', () => {
  console.log("Settings icon clicked");
  settingsWindow.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!menuWindow.contains(event.target) && event.target !== menuIcon) {
    menuWindow.classList.remove('show');
  }

  if (!settingsWindow.contains(event.target) && event.target !== settingsIcon) {
    settingsWindow.classList.remove('show');
  }
});
  
  function changeBanner() {
    bannerImage.classList.remove("active");
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    bannerImage.src = banners[currentBannerIndex];
    setTimeout(() => {
      bannerImage.classList.add("active");
    }, 100);
  }

  
  // Change banner every 3 seconds
  setInterval(changeBanner, 3000);

  fullNameInput.addEventListener('input', validateForm);
  numberInput.addEventListener('input', validateForm);
  messageInput.addEventListener('input', validateForm);
  
  function validateForm() {
    if (fullNameInput.value.trim() !== '' && numberInput.value.trim() !== '' && messageInput.value.trim() !== '' && productOptions.value.trim() !== '') {
        sendButton.disabled = true;
        sendButton.style.opacity = 1;
    }
  }
