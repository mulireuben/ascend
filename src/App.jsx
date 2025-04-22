import { Layout } from 'antd'
import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './components/common/Header';
import AppHome from './components/pages/home';
import AppAbout from './components/pages/about';
import AppServices from './components/pages/services';
import AppWins from './components/pages/wins';
import AppChatMe from './components/pages/chatMe';
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/FooterCopyright';



const { Header, Footer, Content } = Layout;

function App() {

  return (
  <div className='App'>
    <Layout>
     <Router>
      <Header>
        <AppHeader/>
      </Header>
      <Content>
            <Routes>
              <Route path='/' element={<AppHome />} />
              <Route path='/about' element={<AppAbout/>} />
              <Route path='/services' element={<AppServices/>} />
              <Route path='/wins' element={<AppWins/>} />
              <Route path='/Chatme' element={<AppChatMe />} />
             
            </Routes>
          </Content>
     </Router>
     <Footer>
      <FooterWidget/>
      <FooterCopyright/>
     </Footer>
    </Layout>
  </div>
  )
}

export default App
