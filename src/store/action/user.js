import React from 'react'

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        user:user,
    }
}