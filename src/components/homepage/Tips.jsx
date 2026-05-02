import React from 'react';

const Tips = async () => {
    const res = await fetch ("https://a-8-qurbani-hat.vercel.app/benefits.json");
    // const data = await res.json();
    // console.log(data);
    console.log(res);
    return (
        <div>
            
        </div>
    );
};

export default Tips;