import React from 'react';
import styles from '/styles/Pumpkin.module.css'

var Pumpkin = () => {
    return (
        <div className={styles.tamanho}>
             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"  xmlSpace="preserve">

            <ellipse className={styles.shadow} cx="50" cy="85" rx="30" ry="3" />
            <g className={styles.move}>
                {/* <ellipse className={styles.lanterna-safari} cx="50" cy="50" rx="30" ry="20" /> */}
                <ellipse className={styles.lanterna} cx="50" cy="50" rx="30" ry="20" />
                <g className={styles.eye}>
                    <ellipse className={styles.iris} cx="58" cy="39" rx="2" ry="4" />
                    <ellipse className={styles.iris} cx="42" cy="39" rx="2" ry="4" />
                </g>
                <path className={styles.pumkin} d="M69.4,26.4c-1.5-0.1-3.1,0.1-4.6,0.6c-1.5-1.5-3.2-2.3-5.2-2.3c-1.1,0-2.1,0.3-3.1,0.8c-0.9-0.8-1.9-1.4-3-1.9 c-1.6-6-3.5-11.3-6.8-8.7c-3.1,1.5-1.2,1.6-0.7,2c2.5,0.9,2.6,3.9,1.1,6.3c-1.5,0.4-2.9,1.2-4.3,2.4c-1-0.5-2-0.8-3.1-0.8 c-1.9,0-3.7,0.9-5.1,2.3c-1.5-0.5-3-0.7-4.5-0.6c-8.4,0.8-13.4,12.1-11.2,25.3S29.6,74.9,38,74.1c2-0.2,3.8-1,5.3-2.2	c2,1.5,4.1,2.4,6.5,2.4s4.5-0.9,6.5-2.4c1.6,1.3,3.4,2,5.3,2.2c8.4,0.8,16.9-9.3,19.1-22.4S77.8,27.1,69.4,26.4z M32.3,36.5	c1.2-2.3,3.5,1.5,7.3,3c3.8,1.6,7.4-0.4,6.3,2.9c-1.1,3.2-5.2,5.3-9,3.1C33,43.4,31.1,38.7,32.3,36.5z M66,58 c-1.5,2.7-3.3,4.3-4.1,3.5c-0.8-0.7-2.8,0-4.5,1.6c-1.7,1.6-4.2,2-5.6,1s-3.5-1.3-4.7-0.5c-1.2,0.8-3.2,0.2-4.4-1.4	c-1.3-1.6-2.8-2-3.4-1.1c-0.6,1-2.7-0.5-4.7-3.2c-1.9-2.7-2.1-4-0.3-2.7c1.8,1.2,4.2,1.5,5.5,0.7s3-0.3,3.8,1.2 c0.9,1.5,2.5,1.7,3.6,0.5c1.1-1.2,3.1-1.1,4.4,0.3c1.3,1.4,3.4,1.3,4.7-0.2c1.3-1.5,3.1-2.1,4-1.3c0.9,0.8,3.1,0.4,5-0.9 C67.1,54.2,67.4,55.3,66,58z M62.7,45.6c-3.8,2.2-7.9,0.1-9-3.1c-1.2-3.2,2.4-1.3,6.3-2.9c3.8-1.6,6.1-5.4,7.3-3 C68.4,38.7,66.5,43.4,62.7,45.6z" />
            </g>
            </svg>

            <svg>
            <defs>
                <filter id="light" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feTurbulence baseFrequency="1" xresult="colorNoise">
                        <animate attributeName="baseFrequency" values="0.01;0.4;0.01" dur="20s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix in="colorNoise" type="matrix" values=".35 .35 .35 0 0 .35 .35 .35 0 0 .35 .35 .35 0 0 0 0 0 1 0" />
                    <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                    <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
                </filter>
            </defs>
            </svg>
        </div>
       
    );

};

export default Pumpkin;

