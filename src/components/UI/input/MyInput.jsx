import React from 'react';
import classes from "./input.module.css";

const MyInput = (props) => {
    return (
            <input {...props} type="text" className={classes.input}/>
    );
};

export default MyInput;
