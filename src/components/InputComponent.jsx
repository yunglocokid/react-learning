import React, {useState} from 'react';

const InputComponent = () => {
    let [value, setValue] = useState('Lorem ipsum.')
    return (
        <div>
            <h2 className="white">{value}</h2>
            <input type="text" value={value} onChange={event => setValue(value = event.target.value)}/>
        </div>
    );
};

export default InputComponent;
