// When the user scrolls the page, execute scrollFunction 
window.onscroll = function() {
	scrollFunction()
};
var header = document.getElementById("header");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var ctx = document.createElement('canvas').getContext('2d');
    var linGrad = ctx.createLinearGradient(0, 64, 0, 200);
    linGrad.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
    linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: linGrad,
    progressColor: '#29a329',
    cursorColor: '#fff',
      // This parameter makes the waveform look like SoundCloud's player
    barWidth: 2,
    hideScrollbar: true,
});

wavesurfer.on('loading', function (percents) {
      document.getElementById('progress').value = percents;
});

wavesurfer.on('ready', function (percents) {
      document.getElementById('progress').style.display = 'none';
});

wavesurfer.load('http://jennajohnsonvo.com/audio/JennaJohnsonCommercialDemo.mp3');

wavesurfer.on('finish', function () {
  playPauseImage();
});


var ctx2 = document.createElement('canvas').getContext('2d');
    var linGrad2 = ctx2.createLinearGradient(0, 64, 0, 200);
    linGrad2.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
    linGrad2.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: linGrad2,
    progressColor: '#29a329',
    cursorColor: '#fff',
      // This parameter makes the waveform look like SoundCloud's player
    barWidth: 2,
    hideScrollbar: true,
});

wavesurfer2.on('loading', function (percents) {
      document.getElementById('progress').value = percents;
});

wavesurfer2.on('ready', function (percents) {
      document.getElementById('progress').style.display = 'none';
});

wavesurfer2.load('http://jennajohnsonvo.com/audio/JennaJohnsonCommercialCharacterDemo.mp3');

wavesurfer2.on('finish', function () {
  playPauseImage2();
});



function playPauseImage() {
  if (document.getElementById("playTriangle").style.display != 'none') {
    document.getElementById("playTriangle").style.display = 'none';
    document.getElementById("pause").style.display = 'block';
  } else {
    document.getElementById("playTriangle").style.display = 'block';
    document.getElementById("pause").style.display = 'none'
  }
}

function playPauseImage2() {
  if (document.getElementById("playTriangle2").style.display != 'none') {
    document.getElementById("playTriangle2").style.display = 'none';
    document.getElementById("pause2").style.display = 'block';
  } else {
    document.getElementById("playTriangle2").style.display = 'block';
    document.getElementById("pause2").style.display = 'none'
  }
}