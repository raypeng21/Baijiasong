import React from 'react'
import { List, Typography, Divider } from 'antd';
import "./news.scss"
import NewsGallery from '../newsGallery/NewsGallery';

const data1 = [
    '首条以中方为主投资建设的国际铁路全线通车运营',
    '国内首座跨海高铁桥全桥贯通',
    '南水北调中线丹江口大坝加高工程通过完工验收',
    '新建福厦铁路湄洲湾跨海大桥合龙',
    '北京“冬奥大道”绿化景观改造全部完工',
  ];

  const data2 = [
    '深化建筑垃圾治理 助力生态文明建设',
    '老旧小区改造等成效明显的市（地、州、盟）将获资金支持',
    '江苏部署工程建设领域根治欠薪工作',
    '城镇污水处理厂运行、维护及安全技术规程公开征求意见',
    '江苏确定绿色建筑“十四五”发展目标 助力建筑领域碳达峰碳中和',
  ];
export default function News(props) {
    return (
        <div className='news'>

          <div className="topnews">
          <NewsGallery />
            
          </div>

          <div className="word">
          <div className="left">
            <Divider orientation="center">行业新闻</Divider>
            <List
            header={<div>近期行业重点新闻关注</div>}
            footer={<div>2021年12月</div>}
            bordered
            dataSource={data1}
            renderItem={(item)=> (
            <List.Item>
            <Typography.Text>[行业]</Typography.Text> <a href ="http://www.chinajsb.cn/" >{item}</a>
            </List.Item>
            )}
        />

            </div>
            <div className="right">
            <Divider orientation="center">民生新闻</Divider>
            <List
            header={<div>近期民生新闻要点关注</div>}
            footer={<div>2021年12月</div>}
            bordered
            dataSource={data2}
            renderItem={item => (
                <List.Item>
            <Typography.Text>[民生]</Typography.Text> <a href ="http://www.chinajsb.cn/">{item}</a>
            </List.Item>
        )}
        />

            </div>

          </div>

        </div>
    )
}
