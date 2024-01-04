function print(file) {
  window.open(file, "_self");
}

function register() {
  location.assign("policies.html");
}

function share() {
  navigator
    .share({
      files: ['beginning-ending/beginning-ending1.opus']
    })
    .then(() => console.log('Successful share! 🎉'))
    .catch(err => console.error(err));
}