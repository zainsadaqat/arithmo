import React, { useState } from 'react';
import AddIcon from '../../assets/AddIcon.png';
import RemoveIcon from '../../assets/RemoveIcon.png';

const FAQOption = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3
          onClick={() => setShow((prevState) => !prevState)}
          className={`text-[20px] font-bold ${
            show ? 'text-[#0029FF]' : 'text-[#111]'
          }`}
        >
          {question}
        </h3>
        {!show && <img src={AddIcon} alt="Add" width={25} />}
        {show && (
          <img
            onClick={() => setShow((prevState) => !prevState)}
            src={RemoveIcon}
            alt="Remove"
            width={25}
          />
        )}
      </div>
      <div className="my-8">{show && <p>{answer}</p>}</div>
    </div>
  );
};

export default FAQOption;
