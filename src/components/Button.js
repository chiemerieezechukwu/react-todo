import React from "react";

function Button({ buttonText, twButtonBgColor }) {
  const classNames = `inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight shadow-md ${twButtonBgColor}`

  return (
    <>
      <button type="button" className={classNames}>
        {buttonText}
      </button>
    </>
  );
}

export default Button;
