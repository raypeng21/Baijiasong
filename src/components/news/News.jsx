import React from 'react'
import { List, Typography, Divider } from 'antd';
import 'antd/dist/antd.css';
import "./news.scss"



const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "ui",
      title: "UI Design",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  
const data = [
    '首条以中方为主投资建设的国际铁路全线通车运营',
    '国内首座跨海高铁桥全桥贯通',
    '南水北调中线丹江口大坝加高工程通过完工验收',
    '新建福厦铁路湄洲湾跨海大桥合龙',
    '北京“冬奥大道”绿化景观改造全部完工',
  ];
export default function News(props) {
    return (
        <div className='news'>
            <div className="left">
            <Divider orientation="center">行业新闻</Divider>
            <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item)=> (
            <List.Item>
            <Typography.Text>[行业新闻]</Typography.Text> <a>{item}</a>
            </List.Item>
            )}
        />

            </div>
            <div className="right">
            <Divider orientation="left">Default Size</Divider>
            <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item>
            <Typography.Text>[行业新闻]</Typography.Text> {item}
            </List.Item>
        )}
        />

            </div>
        </div>
    )
}
