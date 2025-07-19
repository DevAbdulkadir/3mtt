import React from 'react';

function ListComponent({ items }) {
return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
    {items.map((item) => (
        <li key={item.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>{item.name}</h3>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
        </li>
    ))}
    </ul>
);
}

export default ListComponent;