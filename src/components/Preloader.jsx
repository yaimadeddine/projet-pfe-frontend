import React from 'react'

export default function Preloader() {
  return (
    <div>
          <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="dist/img/omrane.png"
          alt="AdminLTELogo"
          height={60}
          width={60}
        />
      </div> 
    </div>
  )
}
