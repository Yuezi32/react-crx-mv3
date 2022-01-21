import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Popup from '@/popup'
// 引入自定义全局公用样式
import '@/common/stylus/frame.styl'

const antdConfig = {
    locale: zhCN,
}

ReactDOM.render(
    <ConfigProvider {...antdConfig}>
        <Popup />
    </ConfigProvider>,
    document.getElementById('root')
)