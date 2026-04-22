import React, { useState, useRef, useEffect } from 'react';
import { getSolarBotResponse } from '../../services/claudeService';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I am your Wattex Energy Consultant. How can I assist you with your transition to clean energy today?',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const formatMessage = (text) => {    // ← paste here
    return text
      .replace(
        /(\+?\d[\d\s\-]{8,}\d)/g,
        '<a href="tel:$1" class="font-bold text-solar-primary underline">$1</a>'
      )
      .replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1" class="font-bold text-solar-primary underline">$1</a>'
      )
      .replace(
        /(https?:\/\/[^\s]+|www\.[^\s]+)/g,
        '<a href="https://$1" target="_blank" class="font-bold text-solar-primary underline">$1</a>'
      );
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;



    

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const chatHistory = messages.map((m) => ({ role: m.role, content: m.content }));
    const botReply = await getSolarBotResponse(input, chatHistory);

    const botMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: botReply,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };



  return (

    
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-solar-primary text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-200 ring-4 ring-white"
        aria-label="Toggle chat"
      >
        {isOpen ? <i className="fas fa-times text-2xl"></i> : <i className="fas fa-robot text-2xl"></i>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-solar-deep p-5 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-black">W</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-wide">Wattex Consultant</h3>
              <p className="text-white/60 text-xs">Always Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-solar-primary text-white rounded-tr-none shadow-lg shadow-emerald-200/50'
                      : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none'
                  }`}
                >
                 <span dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />

                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-solar-primary/40 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-solar-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-solar-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Wattex AI anything..."
              className="flex-1 px-5 py-3 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary/50 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-12 h-12 bg-solar-primary text-white rounded-xl flex items-center justify-center hover:bg-solar-deep transition-colors disabled:opacity-50 shadow-md"
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;