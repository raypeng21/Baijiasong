import React from 'react'
import "./service.scss"
import Gallery from '../Gallery/Gallery'

export default function Service() {
    return (
        <div className='service'>

            <div className="word">
                <h2>服务项目</h2>
                <p>本公司提供多项专业基础工程建设服务</p>
            </div>


            <div className="rotateContainer">
            <Gallery/>
            </div>

            <div className="serviceList1">
                <div className="list">
                    静压桩（800mm-1200mm）
                </div>

                <div className="list">
                    大直径锤击桩（800mm-1200mm）

                </div>
            </div>

            <div className="serviceList2">

                <div className="list">
                    管桩（800mm-1200mm）

                </div>
                <div className="list">
                    方桩（500mm-600mm）
                </div>
            </div>

            <div className="serviceList3">

                <div className="list">
                    大口径钻孔灌注桩
                </div>

                <div className="list">
                    旋挖钻孔灌注桩
                </div>
            </div>


            <div className="serviceList4">

                <div className="list">
                    长螺旋钻孔灌注桩
                </div>
                <div className="list">
                    深基坑支护
                </div>
            </div>


            <div className="serviceList5">

                <div className="list">
                    土地整理
                </div>
                <div className="list">
                    软地基处理                
                </div>

            </div>

        </div>
    )
}
