import logo from './logo.svg';
import './App.css';
import Randomnumber from './Components/Randomnumber';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [randomNumber, setRandomNumber] = useState();

  const fetchRandomNumber = async () => {
    try {
      const response = await axios.get('https://backend-uttc.vercel.app/api/random');
      const newRandomNumber = response.data.message.random_number;
      setRandomNumber(newRandomNumber);
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };

  const decrementNumber = () => {
    setRandomNumber(prevNumber => prevNumber - 1);
  };

  useEffect(() => {
    fetchRandomNumber(); // Initial call to fetch random number from the API

    const interval = setInterval(() => {
      decrementNumber();
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    if (randomNumber <= 0) {
      fetchRandomNumber(); // Fetch new random number from the API when the number reaches 0
    }
  }, [randomNumber]);

 

 
  
  return (
   <div>
    <div className='flex justify-center items-center h-screen'>

<div class=" p-6  border border-gray-200 bg-[#001974] w-[900px] h-[600px] rounded shadow dark:bg-gray-800 dark:border-gray-700">
  <div className='flex justify-center item-center'>

  
  <div className='flex justify-center items-center h-[300px]  w-[300px] mt-32  mx-28' style={{
  border: "2px solid #FFF",
  background: "radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
  boxShadow: "-5px -5px 250px 0px rgba(255, 255, 255, 0.02) inset",
  backdropFilter: "blur(21px)",borderRadius:"50px"
}}>

  
  <p className='text-white text-center text-[120px] font-inter'>{randomNumber}</p>
  </div>
  </div>

   
    
    
</div>
</div>


  
   </div>
  );
}

export default App;
