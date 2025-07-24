import React from 'react';
import './MusicPlayer.css';
import { HeartOutlined, HeartFilled, ReadOutlined, RetweetOutlined, ScheduleOutlined } from '@ant-design/icons';
 type zdyys = {
  lyricsColor?: string;
  lyricsfontSize?: string;
  buttonColor?: string;
  progresscolor?:string;
  yingliangcongjcolor?:string;
  wxhcongjcolor?:string;
  xunhuancongjcolor?:string
  /*其它 */
}
 // 定义动作类型的字符串字面量（所有可能的动作名称）
type ActionType = 'UP' | 'DOWN' | 'BF' | 'ZT';

// 定义具体的动作接口
interface YinyueAction {
  type: ActionType; // 动作类型
  payload?: any; // 动作携带的数据（可选，根据动作类型决定是否需要）
}
// 定义组件的属性接口
interface MusicPlayerProps {
  size: "small" | "medium" | "large";//控件为可视化组件必须有宽高，为方便使用提供小中大三种宽高
  // style?: React.CSSProperties;//为使用者提供熟悉的样式控制(内联)
  // className?: string;//为使用者提供熟悉的样式控制(style标签和css文件)
  zidingyiys?: zdyys;//为使用者提供自定组件的各种样式
  songs: { title: string; url: string }[]; // 可选的歌曲列表
  backgroundImg?: string; // 可选的背景图片
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ size, zidingyiys, songs, backgroundImg }) => {

  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);

  const currentSongTitle = songs?.[currentSongIndex]?.title || '';

  const handlePauseorPlay = () => {
    const audio = document.getElementById("audio-player") as HTMLAudioElement;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleNext = () => {
    if (!songs || songs.length === 0) return;
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handleLeft = () => {
    if (!songs || songs.length === 0) return;
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  React.useEffect(() => {
    const audio = document.getElementById("audio-player") as HTMLAudioElement;
    if (audio && songs && songs[currentSongIndex]) {
      audio.src = songs[currentSongIndex].url;
      audio.play();
    }
  }, [currentSongIndex, songs]);

  // 自动切换到下一曲：当前歌曲播放结束时
  React.useEffect(() => {
    const audio = document.getElementById("audio-player") as HTMLAudioElement;
    if (!audio) return;
    const handleEnded = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [songs.length]);
  return (
    <div className={`music-player ${size}`} style={backgroundImg ? { backgroundImage: `url(${backgroundImg})` } : {}}>
      <audio src={songs?.[0]?.url} id="audio-player" ></audio>
      <div className='shang'>
        <div className='zuo'></div>
        <div className='zhong'>
            <div className='shang lyrics-bar' style={{ color: zidingyiys?.lyricsColor, fontSize: zidingyiys?.lyricsfontSize }}>
               {currentSongTitle}
            </div>
          <div className='xia '>
            <button onClick={handleLeft} style={{ backgroundColor: zidingyiys?.buttonColor }} className='cosbutton play-button'>prev</button>
            <button onClick={handlePauseorPlay} style={{ backgroundColor: zidingyiys?.buttonColor }} className='cosbutton pause-button'>Play</button>
            <button onClick={handleNext} style={{ backgroundColor: zidingyiys?.buttonColor }} className='cosbutton next-button'>Next</button>
          </div>
        </div>
        <div className='you'>
          <span className='s'><HeartOutlined style={{display:"flex",alignItems:"center",justifyContent:"center"}}/></span>
          <span className='d'><RetweetOutlined style={{display:"flex",alignItems:"center",justifyContent:"center"}}/></span>
        </div>
      </div>
      <div className='xia'></div>
    </div>
  );
};

export default MusicPlayer;
