import React from 'react';
import styles from '/styles/Home.module.css'

var Counter = (props) => {
    return (
        <div>
            <h2>Pessoas no Server</h2>
            <List users={props.users}></List> 
        </div>
    );
};


var List = (props) => {
    return <ul>{props.users.map((user) => <li>{user}</li>)}</ul>;
};

export default Counter;
