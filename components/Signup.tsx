"use client"
import { useState } from "react";
import axios from "axios";
export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div>
                <div>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} className=" border p-1 pt-1" type="text" placeholder="Username"></input>
                </div>
                <div className="pt-2">
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} className=" border p-1 pt-1" type="text" placeholder="Password"></input>
                </div>
                <div className="mt-1 p-1 flex justify-center bg-black text-white">
                    <button onClick={() => {
                        axios.post("http://localhost:3000/api/user", {
                            email,
                            password
                        })
                    }}>Sign up</button>
                </div>
            </div>
        </div>
    </div>
}