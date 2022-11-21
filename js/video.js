// Add js here.
//initialize video and  button variables

/*
Page load
Initialize the video variable and turn off autoplay and turn off looping.

Play Button
Play the video.  

Pause Button
Pause the video.

Slow Down
Slow down the video to the next lowest playback speed from the list: 0.5, 1, 2.
If the video is already on the slowest speed, add an alert saying "Video is at slowest speed!"

Speed Up
Speed up the video to the next highest playback speed from the list: 0.5, 1, 2.
If the video is already on the highest speed, add an alert saying "Video is at fastest speed!"

Skip Ahead
Advance the current video by 15 seconds.
If the video length has been exceeded go back to the start of the video.

Mute
Mute/unmute the video and update the text in the button.

Volume Slider
Change the volume based on the slider and update the volume information.
*/
let video 		= document.querySelector('.video');
let play 		= document.getElementById('play');
let pause 		= document.getElementById('pause');
let slowdown 	= document.getElementById('slower');
let speedup  	= document.getElementById('faster');
let skip_ahead 	= document.getElementById('skip');
let mute  		= document.getElementById('mute');
let volume_shown 		= document.getElementById('volume');
let volume_slider 		= document.getElementById('slider');


function playVideo()
{
    video.play();
}

function pauseVideo()
{
    video.pause();
}



function slowDown()
{
    if(video.playbackRate == 2.0)
	{
        video.playbackRate = 1.0;
    }
    else if(video.playbackRate == 1.0)
	{
        video.playbackRate = 0.5;
    }
    else if(video.playbackRate == 0.5)
	{
        alert('Video is at slowest speed!');
    }

}


function speedUp()
{
    if(video.playbackRate == 0.5)
	{
        video.playbackRate = 1.0;
    }
    else if(video.playbackRate == 1.0)
	{
        video.playbackRate = 2.0;
    }
    else if(video.playbackRate == 2.0)
	{
        alert('Video is at fastest speed!');
    }

}

function skipAhead()
{
    if (video.ended == false)
	{
        video.currentTime = video.currentTime + 15;
    }
    else if (video.ended == true)
	{
        video.load();
    }
}

function muteVideo()
{
    if(video.muted == false)
	{
        video.muted = true;
        mute.innerHTML = 'Unmute';
        slider.value = 0;
        volume_shown.innerHTML = `${slider.value}`;
    }
    else if (video.muted == true)
	{
        video.muted = false;
        mute.innerHTML = 'Mute';
        slider.value = 100;
        volume_shown.innerHTML = `${slider.value}`;
    }

}

function volumeControl()
{
    video.volume = this.value / 100;
    let volume_value = this.value;
    volume_shown.innerHTML = `${volume_value}`;
}

video.load();
video.loop = false;
video.autoplay = false;
play.addEventListener('click',playVideo);
pause.addEventListener('click', pauseVideo);
document.getElementById("volume").innerHTML="100";
volume_slider.addEventListener('change', volumeControl);
mute.addEventListener('click',muteVideo);
slowdown.addEventListener('click', slowDown);
speedup.addEventListener('click',speedUp);
skip_ahead.addEventListener('click', skipAhead);