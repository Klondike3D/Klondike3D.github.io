import React from "react"

const ButtonDark = ({ title, colorClass, textColor, onClick, marginClass }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-5 transition-all duration-500ms ease-in-out hover:ease-in-out w-auto flex items-center justify-center px-8 py-3 border border-main text-base font-medium rounded-md text-white hover:text-white bg-transparent hover:bg-main md:py-3 md:text-lg md:px-10`}
    >
      {title}
    </button>
  )
}

export default ButtonDark