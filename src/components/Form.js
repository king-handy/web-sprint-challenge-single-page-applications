import { values } from 'lodash'
import React, { useState } from 'react'

export default function Form(props) {
    const { values, update, submit } = props
    const [order, setOrder] = useState({ 
        name: '',
        size: '',
        topping1: false,
        topping2: false,
        special: '',
    });

    const onChange = evt => {
        const { name, type, value, checked } = evt.target
        const valueType = type === 'checkbox' ? checked : value
        setOrder({...order, [name]: valueType })
    };

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='pizza-form'>
                <p>Name:<br></br>
                <label>
                    <input type='text' onChange={onChange} name='customer' value={order.customer}></input>
                </label>
                </p>
                <p>Pizza Size:<br></br>
                <label>
                    <select onChange={onChange} name='size' value={order.size}>
                        <option value=''>- Select a Size -</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </select>
                </label>
                </p>
                <p>Toppings:<br></br>
                    <label>Pineapple
                        <input type='radio' onChange={onChange} name='toppings' checked={order.toppings}></input>
                    </label>
                    <label>Pepperoni
                        <input type='radio' onChange={onChange} name='toppings' checked={order.toppings}></input>
                    </label>
                    <label>Extra Cheese
                        <input type='radio' onChange={onChange} name='toppings' checked={order.toppings}></input>
                    </label>
                    <label>Tomato
                        <input type='radio' onChange={onChange} name='toppings' checked={order.toppings}></input>
                    </label>
                </p>
                <p>Special Instructions:<br></br>
                    <label id='special-text'>
                        <input type='text' onChange={onChange} name='special' value={order.special}></input>
                    </label>
                </p>
                <br></br>
                
                <div className='add'>
                    <button>Add to Order</button>
                </div>
            </div>
        </form>
    )
}