import { useState } from 'react'
import { useEffect } from "react";
import './Friends.css'
import Friend from './friend';

export default function Friends(){
    const [friends,setFriends]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div>
            <h3 className='box'>Friends :{friends.length}
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            } </h3>
           
        </div>
    )
}

// 1. state to hold data
// 2.