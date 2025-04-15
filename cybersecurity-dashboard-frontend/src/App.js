import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
// import Header from './components/Header';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import ThreatUpdates from './pages/ThreatUpdates';
import Resources from './pages/Resources';
import EmployeeManager from './pages/EmployeeManager';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Sidebar />
        <main style={{ marginLeft: 240, paddingTop: 64 }}>
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/threat-updates" element={<ThreatUpdates />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/employee-manager" element={<EmployeeManager />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;