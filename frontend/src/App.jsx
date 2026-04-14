import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import InterviewPrep from './pages/InterviewPrep';
import ResumeAnalyzer from './pages/ResumeAnalyzer';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/resume-analyzer' element={<ResumeAnalyzer />} />
        <Route path='/interview-prep/:sessionId' element={<InterviewPrep />} />
      </Routes>

      <Toaster
        position='top-center'
        toastOptions={{
          duration: 3000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}

export default App