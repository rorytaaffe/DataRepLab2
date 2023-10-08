import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar'; // Import the NavigationBar component
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar /> {/* Include the NavigationBar component */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
