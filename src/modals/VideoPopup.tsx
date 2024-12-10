import ModalVideo from 'react-modal-video';

type Props = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoId?: string;
};

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = '1030325084',
}: Props) => {
  return (
    <>
      <ModalVideo
        channel='vimeo'
        // autoplay
        vimeo={{
          // api: true,
          // autoplay: true,
          // player_id: videoId,
          // loop: true,
          // title: true,
          // thumbnail_url:
          //   'https://i.vimeocdn.com/video/1950834121-249e1624be1674dc102f200b96d993af4d303c841a3066da7fa038e86282434d-d_295x166',
          // xhtml: true,
          // html: `<iframe src="https://player.vimeo.com/video/1030325084?app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Finnoaq"></iframe>`,
          thumbnail_url_with_play_button:
            'https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1950834121-249e1624be1674dc102f200b96d993af4d303c841a3066da7fa038e86282434d-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png',
        }}
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
