import React, { useState } from 'react'
import Item from './Item'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
export default function Home() {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)

    const handleAddCart = () => {
        setCount(count + 1)
        dispatch(actionCreators.withdrawMoney(1100))
    }
    const handleRemoveCart = () => {
        setCount(count - 1)
        dispatch(actionCreators.depositMoney(1100))

    }

    return (
        <div className='container d-flex align-items-center flex-column my-5 py-3'>
            <h2>Shop Now</h2>
            <div className=" container d-flex justify-content-evenly my-2 flex-wrap">
                <Item count={count} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} />
            </div>
        </div>
    )
}
