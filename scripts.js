/* Get Our Elements*/
const player = document.querySelector(".player"); // main div
const video = player.querySelector(".viewer"); // looking within the main div
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); //why brackets? is this anything with the attribute data-skip?
const ranges = player.querySelectorAll('.player__slider'); 



/*Build out functions*/
function togglePlay() {
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

function skip() {
    console.log (this.dataset.skip); //shows you in the console value of skip property (currently a string)
    video.currentTime += parseFloat(this.dataset.skip); //parseFloat turns the string into a true number
};

function handleRangeUpdate() {
    video[this.name] = this.value;
    //console.log(this.name);
    //console.log(this.value);
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100; 
    progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; //Not sure where offsetWidth came from
    video.currentTime = scrubTime;
    //console.log(e);
}

/*Hook up event listeners*/ 
video.addEventListener("click", togglePlay); //pause/play clicking on video itself
video.addEventListener("play", updateButton); //when the video is on play, no matter what event caused it to play -- Are these events pause/play built into JS?
video.addEventListener("pause", updateButton); //when the video is on pause, no matter what event caused it to play
video.addEventListener("timeupdate", handleProgress);//timeupdate and progress events are similar/same. Triggers when the video is updating.

toggle.addEventListener("click", togglePlay);//pause/play button 

skipButtons.forEach(button => button.addEventListener("click", skip)); 
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); //next 3 lines allow for smooth dragging
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

//progress.addEventListener("mousemove", () => {
   // if(mousedown) {
        //scrub();
   // }
//}); regular way of writing it
//ADDED CHALLENGE: MAKE A FULL SCREEN BUTTON! 