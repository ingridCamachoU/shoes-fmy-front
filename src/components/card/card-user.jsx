import React from 'react';

const CardUser = ({ img, title, text }) => {
    return (
        <div className="flex flex-col m-2">
            <h3 className="font-bold">{title}</h3>
            <div className="flex items-start">
                <p>{text}</p>
                <img src={img} alt="user" />
            </div>
        </div>
    );
};

export default CardUser;
