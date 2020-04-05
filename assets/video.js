(function () {
  var el = document.createElement('script');
  el.src = "//www.youtube.com/iframe_api";
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(el, s);

  var videoPlayer;

  window.onYouTubeIframeAPIReady = function () {
    videoPlayer = new YT.Player('videoPlayer', {
      height: '390',
      width: '640',
      videoId: 'l9C4ck5zb-4',
      playerVars: {
        'autoplay' : 0,
        // 'controls' : 0,
        'showinfo' : 0,
        'modestbranding' : 1,
        'rel' : 0,
        'color' : 'white'
      },
      events: {
      'onStateChange': onPlayerStateChange
      }
    });
  }

  // Close modal 10 seconds after video ends
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      setTimeout(function(){$('#videoModal').modal('hide');}, 10000);
      done = true;
    }
  }


  // Play video when modal opens;
  // Pause video when modal closes
  $(function () {
    $('#videoModal').on('shown.bs.modal', function () {
      videoPlayer.playVideo();
    }).on('hide.bs.modal', function () {
      videoPlayer.pauseVideo();
    });
  });
}());
