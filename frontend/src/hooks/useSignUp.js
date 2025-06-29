import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signUp = async (name, email, password) => {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // Save to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update auth context
            dispatch({ type: 'LOGIN', payload: json });

            setLoading(false);
        }
    };

    return { signUp, loading, error };
};
