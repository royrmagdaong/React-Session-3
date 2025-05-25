import { useState } from "react";

const Login = () => {
    // SPA = Single Page App

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("email: ", email)
        console.log("password: ", password)

        // false if invalid - true if valid

        // console.log("email is valid", isValidEmail(email))

        // if(!isValidEmail(email)){
        //     console.log('Invalid email')
        // }else{
        //     if(email == "john@gmail.com"){
        //         if(password == 'password123'){
        //             // desired outputs

        //         }else{
        //             console.log('incorrect password')
        //         }
        //     }else{
        //         console.log('incorrect email')
        //     }
        // }

        if(isValidEmail(email)){
            if(email == "john@gmail.com"){
                if(password == 'password123'){
                    // desired outputs

                }else{
                    console.log('incorrect password')
                }
            }else{
                console.log('incorrect email')
            }
        }else{
            console.log('Invalid email')
        }
        
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    // arrow function 1 lines
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // regex

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">email: </label>
                <input type="text" value={email} onChange={handleEmailChange} />
                <label htmlFor="">password: </label>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>

            {/* <h6>{email}</h6> */}
        </div>
        
    );
}
 
export default Login;