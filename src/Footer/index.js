import React from 'react';
import developerlogo from './../../static/logos/developerlogo.png'

export default function Footer() {

  return (
    <>
      <footer>
          <a
            href="https://gemanepa.com"
            target="_blank" rel="noopener noreferrer"
            title="Developed by gemanepa.com">
            <img src={developerlogo} alt="gemanepa" />
          </a>
      </footer>
      <style jsx>{`
      footer {
          height: 30px;
          background-color: #3f51b5;
          margin: auto;
          text-align: center;
          overflow: hidden;
        }

        footer a img {
          margin-top: 3px;
          height: 25px;
          width: auto;
        }
        `}</style>
    </>
  );
}