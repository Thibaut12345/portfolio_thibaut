// Background video: skip the first 5 seconds and the final 30 seconds.
// YouTube reports the actual duration, so no hard-coded end time is needed.
(() => {
  const videoElement = document.getElementById('bike-video-hero');
  if (!videoElement || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const startAt = 5;
  const skipOutro = 30;
  let videoPlayer = null;

  window.onYouTubeIframeAPIReady = () => {
    videoPlayer = new YT.Player('bike-video-hero', {
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.playVideo();
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.ENDED) {
            event.target.seekTo(startAt, true);
            event.target.playVideo();
          }
        }
      }
    });

    // Duration becomes available once YouTube has loaded video metadata.
    window.setInterval(() => {
      if (!videoPlayer || typeof videoPlayer.getDuration !== 'function') return;

      const duration = videoPlayer.getDuration();
      const current = videoPlayer.getCurrentTime();
      const stopAt = duration - skipOutro;

      if (duration > startAt + skipOutro && current >= stopAt) {
        videoPlayer.seekTo(startAt, true);
        videoPlayer.playVideo();
      }
    }, 500);
  };

  const script = document.createElement('script');
  script.src = 'https://www.youtube.com/iframe_api';
  script.async = true;
  document.head.appendChild(script);
})();
