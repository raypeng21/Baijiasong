import React from 'react'
import "./service.scss"
import Gallery from '../Gallery/Gallery'

export default function Service() {
    return (
        <div className='service'>

            <div className="word">
            本公司提供静压桩机，锤击桩基，长螺旋搅拌桩基，水钻孔桩机等多项基础工程建设服务。
            </div>


            <div className="rotateContainer">

            <Gallery />

            </div>
        </div>
    )
}
