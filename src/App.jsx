import { Layout } from 'antd'
import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './components/common/Header';
import AppHome from './components/pages/home';
import AppAbout from './components/pages/about';
import AppServices from './components/pages/services';
import AppWins from './components/pages/wins';
import AppChatMe from './components/pages/chatMe';



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
              <Route path='/About' element={<AppAbout/>} />
              <Route path='/services' element={<AppServices/>} />
              <Route path='/wins' element={<AppWins/>} />
              <Route path='/Chatme' element={<AppChatMe />} />
             
            </Routes>
          </Content>
     </Router>
    </Layout>
  </div>
  )
}

export default App
