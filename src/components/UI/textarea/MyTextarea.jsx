import React from 'react';
import classes from "./textarea.module.css";

const MyTextarea = (props) => {
    return (
        <div>
            <textarea {...props} type="text" className={classes.textarea}/>
        </div>
    );
};

export default MyTextarea;
