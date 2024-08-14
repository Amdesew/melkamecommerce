"use client"

import React, {useState} from "react";
import axios from 'axios';

const API_URL = "https://melkamecommerce.pythonanywhere.com/api/orders/"

const form:React.FC =() => {

    const [username, setUserName] = useState('');
    const [orderditem, setOrderdItem] = useState('');
    const [amountitem, setAmountItem] = useState('');
    const [usernumber, setUserNumber] = useState('');

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        const data = {
            user_name: username,
            orderd_item: orderditem,
            amount_item: amountitem,
            user_number: usernumber,
        }

        try{
            const response = await axios.post(API_URL, data);
            console.log("Submited", response.data)
        } catch(error){
            console.error("Error Submitting", error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            
            <div className="items-center text-center">
                <h1 className="text-2xl">Order Form</h1>
                <p className="py-5">Your Name:</p>
                <input className="border-b-2 border-orange-400 w-60" value={username} onChange={(e) => setUserName(e.target.value)}/>
                <p className="py-5">Refill Your Order:</p>
                <input className="border-b-2 border-orange-400 w-60" value={orderditem} onChange={(e) => setOrderdItem(e.target.value)}/>
                <p className="py-5">How Many Would You Like To Order:</p>
                <input className="border-b-2 border-orange-400 w-60" value={amountitem} onChange={(e) => setAmountItem(e.target.value)}/>
                <p className="py-5">Phone Number To Reach You Out:</p>
                <input className="border-b-2 border-orange-400 w-60" value={usernumber} onChange={(e) => setUserNumber(e.target.value)}/> 
            </div>
            
            <div className="text-center py-8">
                <button type="submit" className="py-3 px-10 bg-orange-400 rounded-full">
                    🛒Order
                </button>
            </div>


        </form>
    )
}

export default form;