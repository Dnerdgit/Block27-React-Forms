import { useState } from "react";

//Set up consts in export function

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
 
    //Add async function w/ default prevention and applicable try/catch to check for errors
    async function handleSubmit(event) {
        event.preventDefault();
        //console.log("Not cleared");
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup"
            , {});
            
            if (response.ok) {
                const jsonResponse = await response.json();
                setToken(jsonResponse.token)
                //console.log(jsonResponse);
            }
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <>
            <h2>Sign Up!</h2>;
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <label>
                    Username: 
                    <input 
                        type="text"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password: 
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button>Submit</button>
            </form>

        </>
    );

  }