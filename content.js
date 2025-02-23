// Made by Regina Bonifacio
// Revamped By Julius Castillejo
// CatpPUPSIS Extension - Version 0.1.0

document.addEventListener('DOMContentLoaded', () => {
  // Use the chrome API if available, otherwise fallback to browser API
  const runtime = chrome?.runtime || browser?.runtime;

  // Set the background image for the div with id "bgslider"
  const bgSlider = document.getElementById("bgslider");
  if (bgSlider) {
    const bgImageUrl = runtime.getURL("assets/pinky.jpg");
    bgSlider.style.backgroundImage = `url(${bgImageUrl})`;
  }

 //replace the footer email because it was an image for some reason  
  const currentOrigin = window.location.origin;
  const targetImageSrc = `${currentOrigin}/student/assets/images/helpdeskemail.png`;
  const targetImg = document.querySelector(`img[src="${targetImageSrc}"]`);
  if (targetImg) {

    const anchorTag = targetImg.closest('a');
    if (anchorTag) {
      anchorTag.remove();
    }
  }
  const emailBold = document.querySelector('div.col-md-6.col-sm-12.text-center b');
  if (emailBold) {
    emailBold.textContent = "For questions and comments, email us at sisconcerns@pup.edu.ph";
  }
});
