var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    var fileName;
    switch (button) {
      case 'w':
        fileName = 'sounds/tom-1.mp3';
        break;
      case 'a':
        fileName = 'sounds/tom-2.mp3';
        break;
      case 's':
        fileName = 'sounds/tom-3.mp3';
        break;
      case 'd':
        fileName = 'sounds/tom-4.mp3';
        break;
      case 'j':
        fileName = 'sounds/crash.mp3';
        break;
      case 'k':
        fileName = 'sounds/kick-bass.mp3';
        break;
      case 'l': fileName='sounds/snare.mp3';
        break;
      default: console.log(button);

    }
    var audio = new Audio(fileName);
    audio.play();
  });
}

document.addEventListener("keydown",function(event){
  playDrum(event.key);
});

function playDrum(button){
  switch (button) {
    case 'w':
      fileName = 'sounds/tom-1.mp3';
      break;
    case 'a':
      fileName = 'sounds/tom-2.mp3';
      break;
    case 's':
      fileName = 'sounds/tom-3.mp3';
      break;
    case 'd':
      fileName = 'sounds/tom-4.mp3';
      break;
    case 'j':
      fileName = 'sounds/crash.mp3';
      break;
    case 'k':
      fileName = 'sounds/kick-bass.mp3';
      break;
    case 'l': fileName='sounds/snare.mp3';
      break;
    default: console.log(button);
  }
  var audio = new Audio(fileName);
  audio.play();
}
