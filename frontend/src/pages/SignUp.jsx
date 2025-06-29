import { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { error, loading, signUp } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(name, email, password);
    };

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3 className='font-bold'>Sign Up</h3>

            <label>Name:</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />

            <label>Email:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />

            <label>Password:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />

            <button type="submit" disabled={loading}>
                Sign Up
            </button>

            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default SignUp;
