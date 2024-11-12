const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

var audioPlayer = document.getElementById('audioPlayer');
    var playPauseButton = document.getElementById('playPauseButton');

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    }  

    function togglePlay() {
        var audio = document.getElementById("iconButton");
        var playButton = document.querySelector(".Play");
        var pauseButton = document.querySelector(".Pause");
    
        if (audio.paused) {
            audio.play();
            playButton.style.display = "none";
            pauseButton.style.display = "block";
        } else {
            audio.pause();
            playButton.style.display = "block";
            pauseButton.style.display = "none";
        }
    }
    
    function Play() {
        var music = document.getElementById("Button");
        var playButton = document.querySelector(".l");
        var pauseButton = document.querySelector(".A");
    
        if (music.paused) {
            music.play();
            playButton.style.display = "none";
            pauseButton.style.display = "block";
        } else {
            music.pause();
            playButton.style.display = "block";
            pauseButton.style.display = "none";
        }
    }
function togg() {
        var song = document.getElementById("himandi");
        var playButton = document.querySelector(".P");
        var pauseButton = document.querySelector(".Pa");
    
        if (song.paused) {
            song.play();
            playButton.style.display = "none";
            pauseButton.style.display = "block";
        } else {
            song.pause();
            playButton.style.display = "block";
            pauseButton.style.display = "none";
        }
    }
    function toggle() {
        var gaana = document.getElementById("out");
        var playButton = document.querySelector(".PLAY");
        var pauseButton = document.querySelector(".PAUSE");
    
        if (gaana.paused) {
            gaana.play();
            playButton.style.display = "none";
            pauseButton.style.display = "block";
        } else {
            gaana.pause();
            playButton.style.display = "block";
            pauseButton.style.display = "none";
        }
    }