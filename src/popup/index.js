import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '@/popup/pages/login'
import Home from '@/popup/pages/home'
import './popup.styl'
// 在popup页面调试content script，仅用于开发环境，build前记得要注释掉。
// import '@/content'

function Popup() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </HashRouter>
    )
}

export default Popup