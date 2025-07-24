import React from 'react';
import './Home.css'; // 样式需要单独提取到CSS文件中
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'; // 引入音乐播放器组件

// 手绘风格网页布局组件
// 这个组件模仿了手绘草图的设计风格，使用了CSS的一些创意效果
// 包含左侧导航栏、中间内容区和右侧信息区   

const Home = () => {
    // 读取public目录下的musics文件夹中的音乐mp3文件,生成一个音乐列表的函数

    const yinyueliebiao = [
        { title: "Song 1", url: "/song.mp3" },
        { title: "Song 2", url: "/song2.mp3" },
    ];

    return (
        <div className="hand-drawn-layout">
            {/* 左侧导航栏 */}
            <div className="left-sidebar">
                <div className="nav-title">导航菜单</div>
                <div className="nav-item">首页</div>
                <div className="nav-item">关于我们</div>
                <div className="nav-item">作品展示</div>
                <div className="nav-item">联系方式</div>
            </div>
            
            {/* 中间内容区 */}
            <div className="main-content">
                <div className="content-header">
                    <h1>手绘风格网页布局</h1>
                    <p>这个布局模仿了你的手绘草图设计，使用了CSS的一些创意效果</p>
                </div>
                <div className="content-area">
                    <h2>主要内容区域</h2>
                    <p>这里是网页的主要内容区域，你可以放置文章、图片、视频等各种内容。</p>
                    <p>这个布局采用了三栏结构，左侧是导航菜单，中间是主要内容，右侧是附加信息。</p>
                    <p>为了增强手绘感，添加了一些装饰元素，如旋转的标题、虚线边框和涂鸦线条。</p>
                    <MusicPlayer
                     size='medium'
                      songs={yinyueliebiao}
                       backgroundImg='/background.jpg'
                       zidingyiys={{ lyricsColor: 'green', lyricsfontSize: '16px', buttonColor: 'transparent' }}
                    />
                </div>
            </div>
            
            {/* 右侧信息区 */}
            <div className="right-sidebar">
                <div className="info-section">
                    <div className="info-title">关于作者</div>
                    <p>一个热爱设计和前端开发的人，喜欢尝试各种创意布局和交互效果。</p>
                </div>
                <div className="info-section">
                    <div className="info-title">最新动态</div>
                    <p>正在学习更多关于CSS和JavaScript的高级技巧。</p>
                    <p>计划开发一个新的个人作品集网站。</p>
                </div>
            </div>
            
            {/* 手绘风格装饰元素 */}
            <div className="scribble scribble-1"></div>
            <div className="scribble scribble-2"></div>
        </div>
    );
};

export default Home;    