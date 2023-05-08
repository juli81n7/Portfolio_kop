function playPauseVideo() {
  let videos = document.querySelectorAll(".videoInsert");
  videos.forEach((video) => {
    // We can only control playback without insteraction if video is mute
    video.muted = true;
    // Play is a promise so we need to check we have it
    let playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio !== 1 && !video.paused) {
                video.pause();
              } else if (video.paused) {
                video.play();
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(video);
      });
    }
  });
}

// And you would kick this off where appropriate with:
playPauseVideo();

const arrow1 = document.querySelector(".arrow_down_1");
const dropdown = document.querySelector(".dropdown_content_1");
const dropclick1 = document.querySelector(".dropclick1");
const display = document.querySelector(".display");

dropclick1.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
  arrow1.classList.toggle("active_arrow");
  dropdown2.classList.add("hide");
  arrow2.classList.remove("active_arrow");
  dropdown3.classList.add("hide");
  arrow3.classList.remove("active_arrow");
});

const arrow2 = document.querySelector(".arrow_down_2");
const dropdown2 = document.querySelector(".dropdown_content_2");
const dropclick2 = document.querySelector(".dropclick2");
dropclick2.addEventListener("click", () => {
  dropdown2.classList.toggle("hide");
  arrow2.classList.toggle("active_arrow");
  dropdown.classList.add("hide");
  arrow1.classList.remove("active_arrow");
  dropdown3.classList.add("hide");
  arrow3.classList.remove("active_arrow");
});

const arrow3 = document.querySelector(".arrow_down_3");
const dropdown3 = document.querySelector(".dropdown_content_3");
const dropclick3 = document.querySelector(".dropclick3");

dropclick3.addEventListener("click", () => {
  dropdown3.classList.toggle("hide");
  arrow3.classList.toggle("active_arrow");
  dropdown.classList.add("hide");
  arrow1.classList.remove("active_arrow");
  dropdown2.classList.add("hide");
  arrow2.classList.remove("active_arrow");
});
