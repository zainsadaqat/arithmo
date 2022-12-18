import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="text-[14px] py-[10px] px-[40px] bg-[#0029FF] text-white font-bold rounded-[10px]"
    >
      {text}
    </button>
  );
};

export default Button;
