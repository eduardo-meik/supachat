import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { AuthGuard } from './components/AuthGuard';
import { GuestGuard } from './components/GuestGuard';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { ResetPassword } from './pages/ResetPassword';
import { UpdatePassword } from './pages/UpdatePassword';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<GuestGuard><SignIn /></GuestGuard>} />
          <Route path="/login" element={<GuestGuard><SignIn /></GuestGuard>} />
          <Route path="/signup" element={<GuestGuard><SignUp /></GuestGuard>} />
          <Route path="/reset-password" element={<GuestGuard><ResetPassword /></GuestGuard>} />
          <Route path="/update-password" element={<UpdatePassword />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
        </Routes>
        <Toaster position="top-right" />
      </AuthProvider>
    </Router>
  );
}

export default App;