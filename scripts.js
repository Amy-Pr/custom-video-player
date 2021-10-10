/* Get Our Elements*/
const player = document.querySelector(".player"); // main div
const video = player.querySelector(".viewer"); // looking within the main div
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); //is this anything with the attribute data-skip?
const ranges = player.querySelectorAll('.player__slider'); 



/*Build out functions*/
function togglePlay () {
    if(video.paused) { // paused is a property of video element; no play property just paused??
        video.play(); //so this is a method built in?

    } else {
        video.pause(); //so this is a method built in? 
    }
};

function updateButton() {
  //const icon = this.paused ? '►' : '❚ ❚'; //alternative using ternary statement
  //toggle.textContent = icon;
    if (this.paused) {
        toggle.innerText = "►";
    } else {
        toggle.innerText = "❚ ❚";
    }
};

function skip () {
    //left off at 11:05
}

/*Hook up event listeners*/ 
video.addEventListener("click", togglePlay); //pause/play clicking on video itself
video.addEventListener("play", updateButton); //when the video is on play, no matter what event caused it to play
video.addEventListener("pause", updateButton); //when the video is on pause, no matter what event caused it to play

toggle.addEventListener("click", togglePlay);//pause/play button 

