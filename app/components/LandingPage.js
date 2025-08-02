'use client'
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth, db } from '@/app/firebase/config';

function LandingPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:pt-8 md:pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-[#0066B1] font-semibold tracking-wider">PREMIUM PARKING SOLUTION</h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Ultimate in Visitor Parking Management
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600">
              Experience precision engineering in parking management. 
              Elevate your property&apos;s parking experience with German-inspired efficiency.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              {!user ? (
                <Link href="/signin" className="bg-[#0066B1] text-white px-8 py-4 rounded-md hover:bg-[#0077CC] transition-all transform hover:scale-105 shadow-lg text-center">
                  Get Started
                </Link>
              ) : (
                <Link href="/dashboard" className="bg-[#0066B1] text-white px-8 py-4 rounded-md hover:bg-[#0077CC] transition-all transform hover:scale-105 shadow-lg text-center">
                  Go to Dashboard
                </Link>
              )}
              <Link href="/features" className="border-2 border-[#0066B1] text-[#0066B1] px-8 py-4 rounded-md hover:bg-[#0066B1]/5 transition-all transform hover:scale-105 text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[300px] md:h-[500px] mt-8 md:mt-0">
            <div className="absolute inset-0 bg-[#0066B1]/5 rounded-xl"></div>
            <Image src="/BMW.png" alt="Parking Management Illustration" fill className="object-contain p-4 md:p-8" priority />
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-6 p-3 bg-[#0066B1]/10 rounded-lg group-hover:bg-[#0066B1]/20 transition-colors flex items-center justify-center">
                <Image src="/car.png" alt="Vehicle Registration" width={40} height={40} className="text-[#0066B1]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center md:text-left">Vehicle Registration</h3>
              <p className="text-gray-600 text-center md:text-left">
                Register vehicles with license plate, brand, and model details for quick check-in access.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-6 p-3 bg-[#0066B1]/10 rounded-lg group-hover:bg-[#0066B1]/20 transition-colors flex items-center justify-center">
                <Image src="/quick.png" alt="Slot Booking" width={40} height={40} className="text-[#0066B1]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center md:text-left">Smart Slot Booking</h3>
              <p className="text-gray-600 text-center md:text-left">
                Book premium parking slots at multiple locations with flexible duration options.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 max-w-md sm:max-w-none">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-6 p-3 bg-[#0066B1]/10 rounded-lg group-hover:bg-[#0066B1]/20 transition-colors flex items-center justify-center">
                <Image src="/rc.png" alt="Booking Management" width={40} height={40} className="text-[#0066B1]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center md:text-left">Booking Management</h3>
              <p className="text-gray-600 text-center md:text-left">
                Extend, cancel, and track your booking history with an intuitive dashboard interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage