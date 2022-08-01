import React from 'react'


const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
}


const Button = ({children, buttonType}) => {
  return (
    <button className='button-container'>
        {children}
    </button>
  )
}

export default Button