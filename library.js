const videoDialog = document.getElementById("video-dialog");
const videoIframe = document.getElementById("video-iframe");

function print(file) {
  window.open(file, "_self");
}

function register() {
  location.assign("policies.html");
}

function videoPlayer(btn) {
  const youtubeLink = btn.getAttribute("data-video");
  videoIframe.src = youtubeLink;
  videoDialog.showModal();
  document.querySelector(".close-button").style.display = "block";
}

function closeVideo() {
  videoIframe.src = "";
  videoDialog.close();
  document.querySelector(".close-button").style.display = "none";
}

function share() {
  navigator
    .share({
      files: ["beginning-ending/beginning-ending1.opus"],
    })
    .then(() => console.log("Successful share! 🎉"))
    .catch((err) => console.error(err));
}

document.querySelectorAll("audio").forEach((audio) => {
  audio.onplay = () => {
    document.querySelectorAll("audio").forEach((pausing) => {
      if (pausing != audio) {
        pausing.pause();
      }
    });
  };
});
