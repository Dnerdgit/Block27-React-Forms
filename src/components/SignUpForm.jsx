import { useState } from "react";

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
 
    async function handleSubmit(event) {
        event.preventDefault();
        //console.log("Not cleared");
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            }
        } catch (error) {
            error.message(setError);
        }
    }

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>

    </form>


    return <h2>Sign Up!</h2>;



  }