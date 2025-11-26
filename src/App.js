import React from 'react';
import Header from './components/Header';
import './App.css';
import Booking from './components/Booking';
import BookProgress from './components/BookProgress';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Booking />
      <BookProgress />
      <Footer />
    </div>
  );
}

export default App;
