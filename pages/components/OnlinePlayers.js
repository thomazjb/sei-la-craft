import { useState, useEffect } from "react";
import styles from '/styles/OnlinePlayers.module.scss'
import { Spinner, Heading, Center, Text } from '@chakra-ui/react'
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
          if(data) setData(data);
          if(data.length <= 0) setData(false);
          setLoading(false);
        })
        .catch((error) => {});
    },[]);
  
    if (isLoading) return <Spinner
    thickness='4px'
    speed='0.65s'
    color='teal.500'
    size='xl'
  />;

    if (data) {
      return (
        <div className={styles.leaderboard}>
          <Heading as='h3' size='1xl'> <Center h='40px'>Players Online</Center></Heading>
          <ol>
            {
            data.map((user) => (
              <li key={user.uuid}>
              <mark><Text as='b'>{ user.displayName }</Text></mark>
              <small><Text as='b' color='teal.100'>{(user.op == true) ? 'ADMIN' : 'VIP' }</Text></small>
              </li>
            ))
            }
          </ol>
        </div>
      );
    }
  };
  
  export default OnlinePlayers;
  