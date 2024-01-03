import React from 'react';
import { InstagramLogo, FacebookLogo, TwitterLogo, YoutubeLogo, EnvelopeSimple } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="w-full h-auto pt-8 bg-[#3D3D3D] text-white capitalize">
      <div className="flex flex-col sm:flex-row justify-between container mx-auto px-4 sm:px-20">
        <div className="max-w-80 mb-6 sm:mb-0 sm:mr-4">
          <h1 className="font-bold py-2 text-xl">come to join</h1>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <EnvelopeSimple size={20} className="text-black" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Email"
              type="text"
              name="search"
            />
          </label>
          <p className="py-2">
            By submitting your email address, you agree to receive marketing emails from Rivly, and accept <span className="underline">our terms & conditions</span> and <span className="underline">privacy policy.</span>
          </p>
        </div>
        <div className="mb-6 sm:mb-0 sm:max-w-80">
          <h1 className="font-bold py-2 text-xl">about fashion</h1>
          <ul>
            <li className="py-2">information</li>
            <li className="py-2">store location</li>
            <li className="py-2">partnership</li>
          </ul>
        </div>
        <div className="mb-6 sm:mb-0 sm:max-w-80">
          <h1 className="font-bold py-2 text-xl">support</h1>
          <ul>
            <li className="py-2">FAQ</li>
            <li className="py-2">payment method</li>
            <li className="py-2">privacy policies</li>
            <li className="py-2">contact me</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold py-2 text-xl">follow</h1>
          <div className="gap-2 flex pt-1">
            <div className="gap-2 flex pt-1">
              <InstagramLogo size={32} className="hover:text-red-400" />
              <FacebookLogo size={32} className="hover:text-blue-500" />
              <TwitterLogo size={32} className="hover:text-blue-600" />
              <YoutubeLogo size={32} className="hover:text-red-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 pb-8">
        <span>© 2023 ARSHION. ALL RIGHTS RESERVEDOWNED </span>
      </div>
    </footer>
  );
};

export default Footer;
