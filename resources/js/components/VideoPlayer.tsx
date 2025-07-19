import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

export interface VideoPlayerProps {
    src: string;
    captionSrc?: string;
    thumbnails?: string;
}

export default function VideoPlayer({ src, captionSrc, thumbnails }: VideoPlayerProps) {
    return (
        <MediaController
            style={{
                width: "100%",
                aspectRatio: "16/9",
            }}
        >
            <ReactPlayer
                slot="media"
                src={src}
                url={src}
                playing={false}
                light={thumbnails}
                controls={false}
                style={{
                    width: "100%",
                    height: "100%",
                    "--controls": "none",
                }}
            ></ReactPlayer>
            <MediaControlBar>
                <MediaPlayButton />
                <MediaSeekBackwardButton seekOffset={10} />
                <MediaSeekForwardButton seekOffset={10} />
                <MediaTimeRange />
                <MediaTimeDisplay showDuration />
                <MediaMuteButton />
                <MediaVolumeRange />
                <MediaPlaybackRateButton />
                <MediaFullscreenButton />
            </MediaControlBar>
        </MediaController>
    );
}