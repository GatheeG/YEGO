import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, error, loading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3 className="font-bold">Log In</h3>

            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                required 
            />

            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                required 
            />

            <button disabled={loading}>Log In</button>

            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Login;
