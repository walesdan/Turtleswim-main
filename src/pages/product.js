import Image from 'next/image';
import Link from "next/link";
import logo from '../assets/images/Logo.png';
import React, { useState, useEffect } from 'react';

const ProductPage = () => {
    const [showSavedNotification, setShowSavedNotification] = useState(false);

  const handleSave = () => {
    setShowSavedNotification(true);
  };

  useEffect(() => {
    let timer;
    if (showSavedNotification) {
      timer = setTimeout(() => {
        setShowSavedNotification(false);
      }, 3000); // Hide the notification after 3 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showSavedNotification]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center">
        <Link href="/">
              <a>
              <Image src={logo} width="150" height="150"/>
              </a>
            </Link>
          
        </div>
        <nav className="hidden md:flex items-center gap-[1.5rem] lg:gap-[3.5rem]">
          <a href="#" className="font-semibold text-[0.875rem] text-greendark lg:text-greendark py-[0.5rem] px-[1rem] rounded-[2rem]">Programs</a>
          <a href="#" className="font-semibold text-[0.875rem] text-greendark lg:text-greendark py-[0.5rem] px-[1rem] rounded-[2rem]">Shop</a>
          <a href="#" className="font-semibold text-[0.875rem] text-greendark lg:text-greendark py-[0.5rem] px-[1rem] rounded-[2rem]">Lessons</a>
          <button  className="bg-green100 font-semibold text-[0.875rem] text-green700 py-[0.75rem] px-[1.5rem] rounded-[2rem]">
                <a href="/register">
Register
                </a>
                

              </button>
        </nav>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
       
          <div className="flex space-x-4 mt-4">
            
            
          </div>
          <div className="w-16 h-16 bg-gray-300 rounded-lg">
              <Image src="/images/Rectangle.png" alt="Thumbnail 5" width={700} height={700} className="rounded-lg" />
            </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Mini (Baby) 4-35 Months</h1>
          <div className="flex items-center mt-2">
            <div className="flex space-x-1 text-yellow-400">
              {/* Replace with stars */}
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <span className="ml-2 text-gray-600">(3,345)</span>
          </div>
          <p className="text-2xl font-semibold mt-4">$55.99</p>
          <div className="mt-4">
            <span className="font-semibold">Options</span>
            <div className="flex space-x-4 mt-2">
              <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
          <button
        style={{ backgroundColor: 'lightgreen', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem' }}
        onClick={handleSave}
      >
        Save
      </button>
      {showSavedNotification && (
        <div className="notification animate-slide-down">
          Saved!
        </div>
      )}
      
      <Link href="/register">
      <button  style={{ backgroundColor: 'black', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem' }}>Enroll</button>
      </Link>
      
      <button style={{ border: '2px solid gray', borderRadius: '0.5rem', padding: '0.5rem' }}>
        <span role="img" aria-label="heart">❤️</span>
      </button>
      
    </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-2 text-gray-700">
              At our swim school, we specialize in offering baby swimming lessons designed to introduce infants and toddlers to the joy of swimming in a safe and nurturing environment. Our certified instructors are experienced in working with young children and understand the unique needs of this age group. Through gentle techniques and...
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">What's Included?</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Safety skills</li>
              <li>Water confidence</li>
              <li>Fun activities</li>
            </ul>
            <h2 className="text-xl font-semibold mt-4">Features</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Experienced instructors</li>
              <li>Small class sizes</li>
              <li>Family-friendly environment</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
