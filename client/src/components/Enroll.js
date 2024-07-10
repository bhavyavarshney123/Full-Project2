import React, { useState } from 'react';
import axios from 'axios';

const Enroll = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherPhone, setFatherPhone] = useState('');

    const handleEnroll = async () => {
        try {
            const res = await axios.post('/api/students/register', {
                name, address, contact, fatherName, fatherPhone
            });
            console.log(res.data);
            // You can redirect to login or show a success message
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Enroll Now</h1>
            <input type="text" placeholder="Student Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Student Address" value={address} onChange={e => setAddress(e.target.value)} />
            <input type="text" placeholder="Student Contact" value={contact} onChange={e => setContact(e.target.value)} />
            <input type="text" placeholder="Father's Name" value={fatherName} onChange={e => setFatherName(e.target.value)} />
            <input type="text" placeholder="Father's Phone Number" value={fatherPhone} onChange={e => setFatherPhone(e.target.value)} />
            <button onClick={handleEnroll}>Get Preparation</button>
        </div>
    );
};

export default Enroll;
