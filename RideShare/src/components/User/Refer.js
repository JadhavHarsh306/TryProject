import React, { useEffect,  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ReferAndEarn = () => {
  const referralCode = "YOUR_UNIQUE_CODE"; // Replace with your actual referral code

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">Refer and Earn with [Your Rideshare Service]</h1>
          <p className="text-lg mb-4 font-bold">
            Share your unique referral code with friends and earn rewards! When your friends sign up using your code, they get a discount on their first ride, and you earn a gift card once they complete their first ride.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Your Referral Code: <span className="text-blue-500">{referralCode}</span></h2>
          <h2 className="text-xl font-semibold mb-2">How It Works:</h2>
          <ol className="list-decimal list-inside mb-4">
            <li>Share your referral code with friends.</li>
            <li>Your friends sign up and get a discount.</li>
            <li>You earn rewards when they complete their first ride!</li>
          </ol>
          <h2 className="text-xl font-semibold mb-2">Gift Card Rewards:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>$10 Gift Card for every friend who takes their first ride.</li>
            <li>Bonus: Refer 5 friends and get an additional $50 gift card!</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Safe and Reliable: Our drivers are background-checked.</li>
            <li>Affordable Rides: Competitive pricing with no hidden fees.</li>
            <li>Convenient App: Easy to use with real-time tracking.</li>
          </ul>
        </div>
        <div className="flex-1 flex items-end justify-center">
          <img 
            src="https://t4.ftcdn.net/jpg/04/90/93/03/360_F_490930345_3ToZEj1ijJolIiC0LAsOSrjsxCiHUhzP.jpg" 
            alt="Rideshare" 
            className="rounded-lg" 
            style={{ width: '600px', height: '300px', objectFit: 'cover' }} 
          />
        </div>
      </div>
      <footer className="mt-10">
        <h3 className="text-lg font-semibold">Terms and Conditions:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Offer valid for new users only.</li>
          <li>Gift cards will be sent via email after the referred friend completes their first ride.</li>
          <li>Limit of one gift card per referral.</li>
        </ul>
        <p>For more information, visit <a href="https://yourwebsite.com" className="text-blue-500">YourWebsite.com</a> or contact support at <a href="mailto:support@yourrideshare.com" className="text-blue-500">support@yourrideshare.com</a>.</p>
      </footer>
    </div>
  );
};

export default ReferAndEarn;