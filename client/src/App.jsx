import { useState } from 'react'
import './App.css';
import React from 'react';
import {Navbar, Services, Transactions, Welcome, Loader, Footer} from './components'
function App() {
  return (
      <div className="min-h-screen">
          <div className="gradient-bg-welcome">
              <Navbar />
              <Welcome />
          </div>
          <Services />
          <Transactions />
          <Footer />
      </div>
  );
}

export default App;
