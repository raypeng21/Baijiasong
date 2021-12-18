import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/dlg.scss'
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import img4 from '@/assets/images/4.jpg' 
import img5 from '@/assets/images/5.jpg'


class DLGView extends React.Component {
    constructor(pros){
        super(pros);
        this.state = {
            imgs:[img1, img2, img3, img4,img5],   // 图片数组
            isPlayRadar: true, //是否需要播放
            timer: null,  // 定时器
            show: false,  // 前后按钮显示
            index: 0,//显示第几个图片
            tempSrc:img1,//默认初始为第一张图片
        }
    }

    start = () =>{
        let {timer, isPlayRadar} = this.state;
        clearInterval(timer);
        if(isPlayRadar){
            timer = setInterval(() => {
                this.state.index ++;
                this.state.index = this.state.index % this.state.imgs.length;

                this.setState({
                    tempSrc:this.state.imgs[this.state.index]
                });

                if (this.state.index >= this.state.imgs.length - 1 ) {
                    this.setState({
                        isPlayRadar: false,
                    })
                }
                //这句话不能少,否则无法停止掉
                clearInterval(timer);
            }, 2000);  //设定2000ms切换一张
        }


    }

    stop = () => { //重新加载一次
        let {timer} = this.state;
        clearInterval(timer);
        this.setState({
            isPlayRadar:true,
            index:0
        })
    }

    render() {
        return(
            <Layout>
                <div className="ReactCarousel">
                    <img src={this.state.tempSrc} id="img" style={{maxWidth:500, height:'auto'}}/>
                    <br />
                    <button id="btn2" onClick={this.stop}>再次演示</button>
                </div>
            </Layout>
        )
}

}

export default DLGView