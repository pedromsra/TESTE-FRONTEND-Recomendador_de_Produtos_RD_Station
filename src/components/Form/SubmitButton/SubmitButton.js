import React from 'react';

function SubmitButton({ text, ...props }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:bg-blue-300"
      {...props}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
