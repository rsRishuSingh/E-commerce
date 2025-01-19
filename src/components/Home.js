import React from 'react'
import Item from './Item'
export default function Home() {
    return (
        <div className='container d-flex align-items-center flex-column my-5 py-3'>
            <h2>Shop Now</h2>
            <div className=" container d-flex justify-content-evenly my-2 flex-wrap">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}
