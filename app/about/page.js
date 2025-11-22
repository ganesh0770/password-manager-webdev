"use client";
import React from 'react'

const page = () => {
  return (
    <>

    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        About Password Manager
      </h1>

      <p className="text-gray-600 text-lg max-w-3xl text-center mb-6">
        Our Password Manager is designed to keep your online accounts safe and secure. 
        With encrypted storage, password generation, and security audits, you can manage 
        all your passwords in one place effortlessly.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Secure Storage</h2>
          <p className="text-gray-500">
            All your passwords are encrypted and stored securely on your device.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Password Generator</h2>
          <p className="text-gray-500">
            Create strong, unique passwords for each of your accounts with ease.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Security Audit</h2>
          <p className="text-gray-500">
            Identify weak or reused passwords and improve your online security.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Easy Management</h2>
          <p className="text-gray-500">
            Organize passwords into categories and access them quickly whenever needed.
          </p>
        </div>
      </div>

      {/* Footer / Version */}
      <div className="mt-12 text-gray-400 text-sm">
        v1.0.0 - Securely manage your passwords
      </div>
    </div>



  </>
   
  )
}

export default page


  
