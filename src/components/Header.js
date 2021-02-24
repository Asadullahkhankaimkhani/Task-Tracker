import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onclick = () => {
        console.log("Click")
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick = {onclick}/ >
        </header>
    )
}

Header.defaultProps  = {
    title : 'Task  Tracker',
}

Header.propTypes = {
      title : PropTypes.string.isRequired,
}
// css in JS

//const styleheading = {
  //  color: black,
//}

export default Header
