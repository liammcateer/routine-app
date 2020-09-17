import React from 'react';

export default function Card(props) {
    const { title, content } = props;
    return (
        <div className="Card">
            <h2>{title}</h2>
            <p>{ content }</p>
        </div>
    )
}