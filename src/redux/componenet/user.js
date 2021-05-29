import React from 'react'

const User = ({name, id, password}) => {
    return (
        <div>
            <ul>
                <li>
                    <p>{name}</p>
                    <h3>{id}</h3>
                    <p>{password}</p>
                </li>
            </ul>
        </div>
    )
}

export default User;