import { values } from 'lodash'
import React from 'react'
import data from './Data'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='pizza-form'>
                <label>Name
                    <input type='text' onChange={onChange} name='customer' value={values.customer}></input>
                </label>
                <label>Pizza Size
                    <select onChange={onChange} name='size' value={values.size}>
                        <option value=''>- Select a Size -</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </select>
                </label>
                <label>Special Instructions
                    <input id='special-text' type='text' onChange={onChange} name='special' value={values.special}></input>
                </label>

                <div className='add'>
                    <button>Add to Order</button>
                </div>
            </div>
        </form>
    )
}
