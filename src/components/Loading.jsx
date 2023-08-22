import React from 'react';

export default function LoadingModal({ message }) {
  return (
    <div
      className={`inline-block h-6 w-6 animate-spin text-pinkLight rounded-full border-4 border-solid border-white/80 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
  );
};

