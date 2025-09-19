const SCROLL_LENGTH = 400;
const scrollVideo = (direction) => {
  return () => {
    const videosList = document.querySelector(".videos-list");
    if (videosList) {
      videosList.scrollBy({
        left: direction * SCROLL_LENGTH,
        behavior: "smooth",
      });
      console.log("scrolled");
    }
  };
};

export const initVideoSlider = () => {
  const prevBtn = document.getElementById("prevVideoBtn");
  const nextBtn = document.getElementById("nextVideoBtn");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", scrollVideo(-1));
    nextBtn.addEventListener("click", scrollVideo(1));
  }
};
