import React from 'react';

export const Logo = () => {
    return (
      <div className="px-5 py-4 bg-transparent sm:hidden w-full z-10">
          <svg width="70" height="70" viewBox="0 0 100 115" className="cursor-pointer absolute z-10 -translate-x-1 -translate-y-1 transition-all duration-300">
              <polygon points="50,5 95,30 95,80 50,105 5,80 5,30" fill="#0f172a" stroke="#64ffda" strokeWidth="7" />
              <text x="50%" y="50%" textAnchor="middle" fill="#64ffda" fontSize="45" fontFamily="Arial" dy=".3em">DG</text>
          </svg>
          <svg width="70" height="70" viewBox="0 0 100 115">
              <polygon points="50,5 95,30 95,80 50,105 5,80 5,30" fill="#64ffda" stroke="#64ffda" strokeWidth="7" />
          </svg>
      </div>
  
    )
  }
  