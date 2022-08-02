import React from 'react';
import './App.css';
import HotelForm from './pages/HotelForm/HotelForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <ToastContainer position={'top-center'} />
            <HotelForm />
        </div>
    );
}

export default App;
