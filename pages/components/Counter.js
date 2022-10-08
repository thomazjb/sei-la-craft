import { useState, useEffect } from "react";
const Counter = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch('http://190.115.197.215:10075/v1/players', {
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
    if (!data) return <p>No profile data</p>;
    const users = []
        data.forEach((data) => {
        users.push(data.name)
      })
    
    return (
      <div>
        <h1>Online Players</h1>
        {users}
      </div>
    );
  };
  
  export default Counter;
  