import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';

// Demonstrate the use of ForwardRef together with useRef, useEffect.
function VideoPlayer(
  props: {
    src: string;
    type: string;
    ratio: '4x3' | '16x9';
    loop?: boolean;
    playsInline?: boolean;
  },
  ref: ForwardedRef<HTMLVideoElement>,
) {

  return (
    <div className={`ratio ratio-${props.ratio}`}>
      <video 
        ref={ref} 
        src={props.src} 
        loop={props.loop}
        playsInline={props.playsInline}
      />
    </div>
  )
}

const MyVideoPlayer = forwardRef(VideoPlayer);

export function VideoApp() {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sync playing.
  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className='mt-3'>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => setIsPlaying(!isPlaying)}
      >
        { isPlaying ? 'Pause' : 'Play' }
      </button>
      <MyVideoPlayer
        ref={ref}
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
        type='video/mp4'
        ratio='16x9'
      />
    </div>
  );
}
