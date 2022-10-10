import { useState, useEffect } from "react";
import styles from '/styles/OnlinePlayers.module.scss'
import {React, Image} from "react";

const OnlinePlayers = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch('https://apiminecraft.sei-la.co/v1/players', {
              headers: {    
                key: '5mGj1i87F46eDF60tz',
                Accept: 'application/json',

              },
            })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {});
    }, []);
  
    if (isLoading) return <p>Loading...</p>;

    if (data) {
      return (
        <div className={styles.leaderboard}>
          <h1>
            Players Online
          </h1>
          <ol>
            {
            data.map((user) => (
              <li key={user.uuid}>
              <mark>{user.displayName || 'Não há players online' }</mark>
              <small>{(user.op == true) ? 'Admin' : 'Vip' }</small>
              </li>
           
            ))
            }
          </ol>
        </div>
      );
    }
  };
  
  export default OnlinePlayers;
  