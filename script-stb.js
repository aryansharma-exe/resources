 new WOW().init();

        const controls = [
            'play-large', 'rewind', 'play', 'fast-forward', 'progress', 'current-time',
            'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'download', 'fullscreen'
        ];
        document.addEventListener('DOMContentLoaded', () => {
            const player = Plyr.setup('.player', { controls });
        });

        // Disable right-click
        document.addEventListener("contextmenu", (e) => e.preventDefault());

        // Disable various keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.key === 'u') ||
                e.ctrlKey || e.shiftKey || e.altKey
            ) {
                e.preventDefault();
            }
        });

const videolink = window.location.href;
const mainDLlink = videolink.replace("/watch/", "/");
function direct_btn {
  const openmainlink = mainDLlink;
  window.location.href = openmainlink;
} 
