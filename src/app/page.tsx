import Image from 'next/image'
import zerologomain from '../../public/zerologomain.png';
import BackgroundVideo from 'next-video/background-video';
import coolvid from '/videos/3051492-hd_1920_1080_25fps.mp4?thumbnailTime=0'


export default function Home() {
  return (
    <div className="h-screen p-0 m-0">
      <div className='max-h-[80] text-white'>
        <BackgroundVideo controls={true} src={coolvid}>
          <Image alt="zero logo" src={zerologomain} />
        </BackgroundVideo>
      </div>
    </div>
  );
}
