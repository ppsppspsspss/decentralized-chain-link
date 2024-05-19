'use client'
import React, { useState } from 'react'

function DevelopersChat() {
  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hello!", createdAt: new Date('2024-05-20T08:00:00Z') },
    { sender: "Bob", text: "Hey, how's it going?", createdAt: new Date('2024-05-20T08:00:00Z') },
    { sender: "Alice", text: "I'm good, thanks!", createdAt: new Date('2024-05-20T08:00:00Z') },
    { sender: "Bob", text: "What are you up to?", createdAt: new Date('2024-05-20T08:00:00Z') },
    { sender: "Alice", text: "Just working on some projects. You?", createdAt: new Date('2024-05-20T08:00:00Z') },
    { sender: "Bob", text: "Same here. Have a great day!", createdAt: new Date('2024-05-20T08:00:00Z') },
    { sender: "Alice", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", createdAt: new Date('2024-05-20T08:00:00Z') }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Hardcoded sender name
  const senderName = "User";

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = { sender: senderName, text: newMessage, createdAt: new Date() };
      setMessages(prevMessages => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 ml-40">Developer Discussion Chat</h2>
      <div className="bg-white w-3/4 rounded-lg shadow-md p-6 border border-black mx-auto">
        <div className="h-64 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className="text-sm text-gray-500">{message.sender}</div>
              <div className="text-gray-800">{message.text}</div>
              <div className="text-sm text-gray-500">{new Date(message.createdAt).toLocaleTimeString()}</div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-grow border rounded px-4 py-2 mr-2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message"
          />
          <button
            onClick={handleSendMessage}
            className="bg-black text-white px-2 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
export default DevelopersChat;
