import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color , text, onClick}) => {
    return (
        <div>
        <button className='btn' style= {{background : color}}
        onClick = {onClick}>{text}</button>
        </div>
    )
}
Button.defaultProps = {
    color : 'black',
    text : 'Add',

}
Button.propTypes  = {
    color : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    onclick : PropTypes.func,
}
export default Button
