import { useState, useRef, useEffect } from 'react';
import logoEmblem from '../assets/logo-emblem.png';

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const SUGGESTIONS = [
  "What services do you offer?",
  "How do I start a project?",
  "Where are you located?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to Nexoratel Technologies. How may I assist you with your software and digital architecture needs today?'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim() || loading) return;

    const userMsg = { role: 'user', content: query.trim() };
    const updatedMessages = [...messages, userMsg];
    
    setMessages(updatedMessages);
    setInputMessage('');
    setLoading(true);

    try {
      const apiPayload = updatedMessages
        .filter((_, idx) => idx > 0)
        .map(m => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiPayload }),
      });

      const data = await responseToJson(res);

      if (res.ok && data.reply) {
        setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: 'We encountered a momentary delay connecting to our services. Please try again in a moment.' }
        ]);
      }
    } catch {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Connection failed. Please check your network or try again shortly.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const responseToJson = async (res) => {
    try {
      return await res.json();
    } catch {
      return {};
    }
  };

  return (
    <>
      <style>{`
        @keyframes chatGlowPulse {
          0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7); }
          70% { box-shadow: 0 0 0 14px rgba(14, 165, 233, 0); }
          100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
        }
        @keyframes messagePop {
          0% { opacity: 0; transform: translateY(10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chat-bubble-pop { animation: messagePop 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .chat-glow { animation: chatGlowPulse 2.5s infinite; }
        
        .chat-launcher-btn {
          position: fixed;
          bottom: 92px;
          right: 25px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 12px 30px rgba(14, 165, 233, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .chat-launcher-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 16px 36px rgba(14, 165, 233, 0.6);
        }

        .chat-window {
          position: fixed;
          bottom: 160px;
          right: 25px;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 540px;
          max-height: calc(100vh - 180px);
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(14, 165, 233, 0.2);
          box-shadow: 0 25px 60px -10px rgba(11, 31, 56, 0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 1000;
          animation: messagePop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .suggestion-chip {
          background: rgba(14, 165, 233, 0.08);
          border: 1px solid rgba(14, 165, 233, 0.25);
          color: #0284c7;
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .suggestion-chip:hover {
          background: #0ea5e9;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0ea5e9;
          display: inline-block;
          animation: typingPulse 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typingPulse {
          0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Floating Action Button */}
      <button 
        className={`chat-launcher-btn ${!isOpen ? 'chat-glow' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Nexoratel AI Assistant"
      >
        {isOpen ? (
          <CloseIcon />
        ) : (
          <img 
            src={logoEmblem} 
            alt="Nexoratel Emblem" 
            style={{ width: '28px', height: '28px', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }} 
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)',
            padding: '16px 20px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}>
                <img 
                  src={logoEmblem} 
                  alt="Nexoratel Emblem" 
                  style={{ width: '26px', height: '26px', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }} 
                />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, letterSpacing: '-0.2px' }}>
                  Nexoratel Assistant
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#4ade80' }}></span>
                  <span style={{ fontSize: '0.72rem', opacity: 0.9, fontWeight: 500 }}>Online & Ready</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', opacity: 0.8, padding: '4px' }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className="chat-bubble-pop"
                style={{
                  display: 'flex',
                  minWidth: 0,
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  maxWidth: '82%',
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user' ? 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)' : '#ffffff',
                  color: msg.role === 'user' ? '#ffffff' : '#1e293b',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  boxShadow: msg.role === 'user' ? '0 4px 12px rgba(14, 165, 233, 0.25)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                  border: msg.role === 'user' ? 'none' : '1px solid #e2e8f0',
                  whiteSpace: 'pre-line',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  minWidth: 0
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat-bubble-pop" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '12px 18px',
                  borderRadius: '18px 18px 18px 4px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div style={{
            display: 'flex',
            gap: '8px',
            padding: '10px 14px',
            overflowX: 'auto',
            background: '#ffffff',
            borderTop: '1px solid #f1f5f9'
          }}>
            {SUGGESTIONS.map((text, idx) => (
              <button
                key={idx}
                className="suggestion-chip"
                onClick={() => handleSendMessage(text)}
              >
                {text}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: '12px 16px',
              background: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              gap: '10px',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything about our solutions..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                background: '#f8fafc',
                fontSize: '0.88rem',
                outline: 'none',
                color: '#1e293b'
              }}
            />
            <button
              type="submit"
              disabled={loading || !inputMessage.trim()}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: inputMessage.trim() ? 'linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)' : '#cbd5e1',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputMessage.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s ease'
              }}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
