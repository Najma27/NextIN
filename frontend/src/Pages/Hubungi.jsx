// App.jsx
import React, { useState } from 'react';
import ChatForm from './ChatForm';
import Chatroom from './Chatroom';
import NavbarChat from '../components/NavbarChat';

const Hubungi = () => {
  const [username, setUsername] = useState('');

  const handleUsernameSubmit = (name) => {
    setUsername(name);
  };

  return (
    <div>
      <NavbarChat/>
      {!username ? (
        <ChatForm onUsernameSubmit={handleUsernameSubmit} />
      ) : (
        <Chatroom username={username} />
      )}
    </div>
  );
};

export default Hubungi;
