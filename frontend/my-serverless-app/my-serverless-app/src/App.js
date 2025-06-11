import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
 function App() {
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', { id, data });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error submitting data');
        }
    };

    return (
        <div>
            <h1>Serverless Application</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
export default App;
