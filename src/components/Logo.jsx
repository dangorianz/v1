import React from 'react';

export const Logo = () => {
    return (
      <div className="relative  w-[80px] h-[80px]">
          <svg width="70" height="70" viewBox="0 0 100 115" className="cursor-pointer absolute z-10 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
              <polygon points="50,5 95,30 95,80 50,105 5,80 5,30" fill="#0f172a" stroke="#64ffda" strokeWidth="7" />
              <text x="50%" y="50%" textAnchor="middle" fill="#64ffda" fontSize="45" fontFamily="Arial" dy=".3em">D</text>
          </svg>
          <svg width="70" height="70" viewBox="0 0 100 115">
              <polygon points="50,5 95,30 95,80 50,105 5,80 5,30" fill="#64ffda" stroke="#64ffda" strokeWidth="7" />
          </svg>
      </div>
  
    )
  }
  