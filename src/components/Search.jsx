import React from 'react'

export default function Search(props) {
    const { onSearch } = props
    return (
        <div>
            <label htmlFor="">Search</label>
            <input type="text" placeholder='Enter food' onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}
