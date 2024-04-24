const banners = [
    "./images/banner1.png",
    "./images/banner2.png",
    "./images/banner3.png"
  ];
  
  let currentBannerIndex = 0;
  const bannerImage = document.getElementById("ad-image");
  
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