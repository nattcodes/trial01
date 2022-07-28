import React from 'react'

const Content = ({ colorValue, setColorValue}) => {
    const inputColorValue = (colorValue) ? colorValue : 'Empty Value'
    
  return (
    <div className='container'>
        <h1 style={{backgroundColor : colorValue}}>
            {inputColorValue}
        </h1>
        <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder='add color name'
                required
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)}

            />
        </form>
    </div>
    
  )
}


export default Content

