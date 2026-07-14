import React, { useState, useRef, useEffect } from 'react';
import { getSolarBotResponse } from '../../services/claudeService';  // ✅ RESTORED — was commented out

/* ─── Custom useMediaQuery (mirrors MUI API) ─── */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
};

/* ─── Breakpoint hook ─── */
const useBreakpoint = () => {
  const isWatch     = useMediaQuery('(max-width: 240px)');
  const isMobileS   = useMediaQuery('(min-width: 241px) and (max-width: 480px)');
  const isMobileL   = useMediaQuery('(min-width: 481px) and (max-width: 600px)');
  const isTabletP    = useMediaQuery('(min-width: 601px) and (max-width: 768px)');
  const isTabletL    = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLaptopS    = useMediaQuery('(min-width: 1025px) and (max-width: 1280px)');
  // 1281+ = desktop (default)

  if (isWatch)   return 'watch';
  if (isMobileS) return 'mobileS';
  if (isMobileL) return 'mobileL';
  if (isTabletP) return 'tabletP';
  if (isTabletL) return 'tabletL';
  if (isLaptopS) return 'laptopS';
  return 'desktop';
};

/* ─── Responsive style tokens per breakpoint ─── */
const RS = {
  watch: {
    wrapBot: 4, wrapRight: 4,
    togW: 34, togH: 34, togRad: 10, togRing: 2, togIcon: 13,
    winBot: 42, winRight: 0, winW: '95vw', winH: '68vh', winRad: 12,
    hdPad: '8px 10px', hdGap: 6, avW: 22, avH: 22, avRad: 6, avFont: 9, titleFont: 9, subFont: 7,
    msgPad: 10, msgGap: 6, bubPad: '6px 8px', bubFont: 9.5, bubMax: '92%', bubRad: 10,
    dotW: 5, dotH: 5, dotGap: 3,
    fmPad: 6, fmGap: 4, inPx: 8, inPy: 6, inFont: 9.5, inRad: 8,
    sendW: 28, sendH: 28, sendRad: 8, sendIcon: 8, placeholder: 'Ask...'
  },
  mobileS: {
    wrapBot: 12, wrapRight: 12,
    togW: 48, togH: 48, togRad: 14, togRing: 3, togIcon: 18,
    winBot: 64, winRight: 0, winW: 'calc(100vw - 24px)', winH: 'min(480px, calc(100vh - 90px))', winRad: 20,
    hdPad: '12px 14px', hdGap: 8, avW: 30, avH: 30, avRad: 8, avFont: 11, titleFont: 11.5, subFont: 9,
    msgPad: 12, msgGap: 10, bubPad: '10px 12px', bubFont: 12, bubMax: '88%', bubRad: 14,
    dotW: 6, dotH: 6, dotGap: 4,
    fmPad: 10, fmGap: 6, inPx: 12, inPy: 10, inFont: 12, inRad: 10,
    sendW: 38, sendH: 38, sendRad: 10, sendIcon: 11, placeholder: 'Ask Wattex AI...'
  },
  mobileL: {
    wrapBot: 16, wrapRight: 16,
    togW: 52, togH: 52, togRad: 14, togRing: 3, togIcon: 20,
    winBot: 72, winRight: 0, winW: 'min(370px, calc(100vw - 32px))', winH: 'min(510px, calc(100vh - 100px))', winRad: 22,
    hdPad: '14px 16px', hdGap: 10, avW: 34, avH: 34, avRad: 10, avFont: 12, titleFont: 12.5, subFont: 10,
    msgPad: 14, msgGap: 12, bubPad: '12px 14px', bubFont: 13, bubMax: '86%', bubRad: 15,
    dotW: 7, dotH: 7, dotGap: 5,
    fmPad: 12, fmGap: 6, inPx: 14, inPy: 11, inFont: 13, inRad: 10,
    sendW: 42, sendH: 42, sendRad: 10, sendIcon: 12, placeholder: 'Ask Wattex AI anything...'
  },
  tabletP: {
    wrapBot: 20, wrapRight: 20,
    togW: 56, togH: 56, togRad: 16, togRing: 3, togIcon: 22,
    winBot: 78, winRight: 0, winW: 370, winH: 530, winRad: 24,
    hdPad: '16px 18px', hdGap: 10, avW: 36, avH: 36, avRad: 10, avFont: 13, titleFont: 13, subFont: 10.5,
    msgPad: 16, msgGap: 14, bubPad: '13px 15px', bubFont: 13.5, bubMax: '85%', bubRad: 16,
    dotW: 7, dotH: 7, dotGap: 5,
    fmPad: 14, fmGap: 8, inPx: 16, inPy: 12, inFont: 13, inRad: 11,
    sendW: 44, sendH: 44, sendRad: 11, sendIcon: 13, placeholder: 'Ask Wattex AI anything...'
  },
  tabletL: {
    wrapBot: 24, wrapRight: 24,
    togW: 60, togH: 60, togRad: 16, togRing: 4, togIcon: 24,
    winBot: 84, winRight: 0, winW: 380, winH: 550, winRad: 24,
    hdPad: '18px 20px', hdGap: 12, avW: 40, avH: 40, avRad: 12, avFont: 14, titleFont: 14, subFont: 11,
    msgPad: 20, msgGap: 16, bubPad: '15px 16px', bubFont: 14, bubMax: '85%', bubRad: 16,
    dotW: 8, dotH: 8, dotGap: 6,
    fmPad: 16, fmGap: 8, inPx: 20, inPy: 12, inFont: 14, inRad: 12,
    sendW: 48, sendH: 48, sendRad: 12, sendIcon: 14, placeholder: 'Ask Wattex AI anything...'
  },
  laptopS: {
    wrapBot: 24, wrapRight: 24,
    togW: 62, togH: 62, togRad: 16, togRing: 4, togIcon: 24,
    winBot: 86, winRight: 0, winW: 380, winH: 550, winRad: 24,
    hdPad: '20px', hdGap: 12, avW: 40, avH: 40, avRad: 12, avFont: 14, titleFont: 14, subFont: 12,
    msgPad: 20, msgGap: 16, bubPad: '16px', bubFont: 14, bubMax: '85%', bubRad: 16,
    dotW: 8, dotH: 8, dotGap: 6,
    fmPad: 16, fmGap: 8, inPx: 20, inPy: 12, inFont: 14, inRad: 12,
    sendW: 48, sendH: 48, sendRad: 12, sendIcon: 14, placeholder: 'Ask Wattex AI anything...'
  },
  desktop: {
    wrapBot: 24, wrapRight: 24,
    togW: 64, togH: 64, togRad: 16, togRing: 4, togIcon: 26,
    winBot: 88, winRight: 0, winW: 400, winH: 580, winRad: 24,
    hdPad: '20px', hdGap: 12, avW: 40, avH: 40, avRad: 12, avFont: 14, titleFont: 14, subFont: 12,
    msgPad: 20, msgGap: 16, bubPad: '16px', bubFont: 14, bubMax: '85%', bubRad: 16,
    dotW: 8, dotH: 8, dotGap: 6,
    fmPad: 16, fmGap: 8, inPx: 20, inPy: 12, inFont: 14, inRad: 12,
    sendW: 48, sendH: 48, sendRad: 12, sendIcon: 14, placeholder: 'Ask Wattex AI anything...'
  }
};

/* ✅ Demo stub REMOVED — real getSolarBotResponse now comes from the import above */

// 🔧 CHANGE 1/7 — Language config. Native-script short labels for the selector,
// plus greeting / placeholder / typing text used across the UI. Keep phone,
// email, and website URLs unchanged across languages.
const LANGUAGES = {
  en: {
    code: 'en',
    label: 'EN',
    fullLabel: 'English',
    greeting: 'Hello! I am your Wattex Energy Consultant. How can I assist you with your transition to clean energy today?',
    placeholder: 'Ask Wattex AI anything...',
    placeholderShort: 'Ask Wattex AI...',
    placeholderTiny: 'Ask...',
    switchedTo: 'Language changed to English. How can I help you?',
    subLabel: 'Always Online',
  },
  te: {
    code: 'te',
    label: 'తె',
    fullLabel: 'తెలుగు',
    greeting: 'నమస్కారం! నేను మీ Wattex Energy కన్సల్టెంట్‌ని. క్లీన్ ఎనర్జీకి మారడంలో నేను మీకు ఎలా సహాయపడగలను?',
    placeholder: 'Wattex AIని ఏదైనా అడగండి...',
    placeholderShort: 'Wattex AIని అడగండి...',
    placeholderTiny: 'అడగండి...',
    switchedTo: 'భాష తెలుగుకు మార్చబడింది. నేను మీకు ఎలా సహాయం చేయగలను?',
    subLabel: 'ఎల్లప్పుడూ ఆన్‌లైన్',
  },
  hi: {
    code: 'hi',
    label: 'हि',
    fullLabel: 'हिन्दी',
    greeting: 'नमस्ते! मैं आपका Wattex Energy कंसल्टेंट हूँ। स्वच्छ ऊर्जा की ओर बढ़ने में मैं आपकी कैसे मदद कर सकता हूँ?',
    placeholder: 'Wattex AI से कुछ भी पूछें...',
    placeholderShort: 'Wattex AI से पूछें...',
    placeholderTiny: 'पूछें...',
    switchedTo: 'भाषा हिन्दी में बदल दी गई है। मैं आपकी कैसे सहायता कर सकता हूँ?',
    subLabel: 'हमेशा ऑनलाइन',
  },
};

const LANG_STORAGE_KEY = 'wattex_bot_lang';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  // 🔧 CHANGE 2/7 — Language state, hydrated from localStorage.
  // Falls back to 'en' if nothing stored or an unknown value is present.
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return LANGUAGES[stored] ? stored : 'en';
  });

  // 🔧 CHANGE 3/7 — Initial greeting uses the currently-selected language.
  const [messages, setMessages] = useState(() => [
    {
      id: '1',
      role: 'assistant',
      content: LANGUAGES[
        (typeof window !== 'undefined' && LANGUAGES[window.localStorage.getItem(LANG_STORAGE_KEY)])
          ? window.localStorage.getItem(LANG_STORAGE_KEY)
          : 'en'
      ].greeting,
      timestamp: new Date(),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const bp = useBreakpoint();
  const t = RS[bp];

  // 🔧 CHANGE 4/7 — Persist language + swap the greeting/announce the switch.
  // If the only message so far is the initial greeting, replace it silently.
  // If real conversation is in progress, append a short confirmation in the
  // new language (keeps history intact).
  const handleLanguageChange = (nextLang) => {
    if (!LANGUAGES[nextLang] || nextLang === language) return;
    setLanguage(nextLang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
    }
    setMessages((prev) => {
      // Only the seed greeting exists → replace it.
      if (prev.length === 1 && prev[0].id === '1' && prev[0].role === 'assistant') {
        return [{ ...prev[0], content: LANGUAGES[nextLang].greeting }];
      }
      // Otherwise append a switch confirmation.
      return [
        ...prev,
        {
          id: `lang-${Date.now()}`,
          role: 'assistant',
          content: LANGUAGES[nextLang].switchedTo,
          timestamp: new Date(),
        },
      ];
    });
  };

  const formatMessage = (text) => {
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

    try {
      const chatHistory = messages.map((m) => ({ role: m.role, content: m.content }));
      // 🔧 CHANGE 5/7 — Pass the currently-selected language to the AI service.
      const botReply = await getSolarBotResponse(input, chatHistory, language);

      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: botReply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('ChatBot error:', error);
      // 🔧 CHANGE 6/7 — Localized error fallback (the service already handles
      // localization, this catch block is defensive for unexpected throws).
      const errorFallback = {
        en: "I'm experiencing a brief connection issue. Please call us at +91 91330 66113 or email info@wattexenergy.in.",
        te: "క్షమించండి, ప్రస్తుతం చిన్న కనెక్షన్ సమస్య ఉంది. దయచేసి +91 91330 66113 వద్ద కాల్ చేయండి లేదా info@wattexenergy.inకు ఇమెయిల్ చేయండి.",
        hi: "क्षमा करें, अभी एक छोटी कनेक्शन समस्या है। कृपया +91 91330 66113 पर कॉल करें या info@wattexenergy.in पर ईमेल करें।",
      };
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorFallback[language] || errorFallback.en,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // 🔧 CHANGE 7/7 — Derived localized strings for placeholder + subLabel.
  // Placeholder swaps size based on breakpoint (watch/mobileS/other).
  const currentLang = LANGUAGES[language];
  const localizedPlaceholder =
    bp === 'watch' ? currentLang.placeholderTiny
    : bp === 'mobileS' ? currentLang.placeholderShort
    : currentLang.placeholder;
  const localizedSubLabel = currentLang.subLabel;

  // Compact segmented control sizing per breakpoint.
  const langBtnSize = {
    watch:   { padX: 4,  padY: 1, font: 7.5,  gap: 2, rad: 5 },
    mobileS: { padX: 6,  padY: 2, font: 9.5,  gap: 3, rad: 7 },
    mobileL: { padX: 7,  padY: 3, font: 10,   gap: 3, rad: 7 },
    tabletP: { padX: 8,  padY: 3, font: 10.5, gap: 4, rad: 8 },
    tabletL: { padX: 9,  padY: 4, font: 11,   gap: 4, rad: 8 },
    laptopS: { padX: 9,  padY: 4, font: 11,   gap: 4, rad: 8 },
    desktop: { padX: 10, padY: 4, font: 11,   gap: 4, rad: 9 },
  }[bp];

  return (

    <>
    <style>{`
      @keyframes chatSlideIn {
        from { opacity: 0; transform: translateY(16px) scale(0.95); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes dotPulse {
        0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
        40% { transform: translateY(-4px); opacity: 1; }
      }
    `}</style>

    <div className="fixed bottom-6 right-6 z-[60]"
      style={{ bottom: t.wrapBot, right: t.wrapRight }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-solar-primary text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-200 ring-4 ring-white"
        aria-label="Toggle chat"
        style={{
          width: t.togW,
          height: t.togH,
          borderRadius: t.togRad,
          boxShadow: `0 0 0 ${t.togRing}px #fff, 0 8px 24px rgba(0,0,0,0.18)`,
        }}
      >
        {isOpen
          ? <i className="fas fa-times text-2xl" style={{ fontSize: t.togIcon }}></i>
          : <i className="fas fa-robot text-2xl" style={{ fontSize: t.togIcon }}></i>
        }
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in"
          style={{
            bottom: t.winBot,
            right: t.winRight,
            width: t.winW,
            height: t.winH,
            maxHeight: bp === 'watch' ? '68vh' : 'calc(100vh - 100px)',
            borderRadius: t.winRad,
            animation: 'chatSlideIn 0.28s ease-out',
          }}
        >
          <div className="bg-solar-deep p-5 flex items-center gap-3"
            style={{ padding: t.hdPad, gap: t.hdGap, flexShrink: 0 }}
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"
              style={{ width: t.avW, height: t.avH, borderRadius: t.avRad, flexShrink: 0 }}
            >
              <span className="text-white font-black"
                style={{ fontSize: t.avFont }}
              >W</span>
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h3 className="text-white font-bold text-sm tracking-wide"
                style={{ fontSize: t.titleFont, margin: 0, lineHeight: 1.3 }}
              >Wattex Consultant</h3>
              <p className="text-white/60 text-xs"
                style={{ fontSize: t.subFont, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >{localizedSubLabel}</p>
            </div>

            {/* 🔧 Language selector — segmented pills. */}
            <div
              role="group"
              aria-label="Select language"
              style={{
                display: 'flex',
                gap: langBtnSize.gap,
                background: 'rgba(255,255,255,0.10)',
                padding: langBtnSize.gap,
                borderRadius: langBtnSize.rad + 2,
                flexShrink: 0,
              }}
            >
              {Object.values(LANGUAGES).map((lng) => {
                const active = language === lng.code;
                return (
                  <button
                    key={lng.code}
                    type="button"
                    onClick={() => handleLanguageChange(lng.code)}
                    title={lng.fullLabel}
                    aria-label={`Switch to ${lng.fullLabel}`}
                    aria-pressed={active}
                    style={{
                      background: active ? '#ffffff' : 'transparent',
                      color: active ? '#1E3358' : 'rgba(255,255,255,0.85)',
                      border: 'none',
                      borderRadius: langBtnSize.rad,
                      padding: `${langBtnSize.padY}px ${langBtnSize.padX}px`,
                      fontSize: langBtnSize.font,
                      fontWeight: active ? 700 : 600,
                      lineHeight: 1.1,
                      cursor: 'pointer',
                      transition: 'background 160ms ease, color 160ms ease',
                      minWidth: 0,
                    }}
                  >
                    {lng.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50"
            style={{ padding: t.msgPad }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{ marginBottom: t.msgGap }}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-solar-primary text-white rounded-tr-none shadow-lg shadow-emerald-200/50'
                      : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none'
                  }`}
                  style={{
                    maxWidth: t.bubMax,
                    padding: t.bubPad,
                    fontSize: t.bubFont,
                    borderRadius: t.bubRad,
                    lineHeight: 1.55,
                    wordBreak: 'break-word',
                    ...(msg.role === 'user'
                      ? { borderTopRightRadius: 0 }
                      : { borderTopLeftRadius: 0 }
                    ),
                  }}
                >
                 <span dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />

                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm"
                  style={{ padding: t.bubPad, borderRadius: t.bubRad, borderTopLeftRadius: 0 }}
                >
                  <div className="flex gap-1.5"
                    style={{ gap: t.dotGap }}
                  >
                    <div className="w-2 h-2 bg-solar-primary/40 rounded-full animate-bounce"
                      style={{ width: t.dotW, height: t.dotH, animation: 'dotPulse 1.4s infinite 0ms' }}
                    ></div>
                    <div className="w-2 h-2 bg-solar-primary/40 rounded-full animate-bounce"
                      style={{ width: t.dotW, height: t.dotH, animation: 'dotPulse 1.4s infinite 150ms' }}
                    ></div>
                    <div className="w-2 h-2 bg-solar-primary/40 rounded-full animate-bounce"
                      style={{ width: t.dotW, height: t.dotH, animation: 'dotPulse 1.4s infinite 300ms' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2"
            style={{ padding: t.fmPad, gap: t.fmGap, flexShrink: 0 }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={localizedPlaceholder}
              className="flex-1 px-5 py-3 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-solar-primary/50 transition-all"
              style={{
                paddingLeft: t.inPx,
                paddingRight: t.inPx,
                paddingTop: t.inPy,
                paddingBottom: t.inPy,
                fontSize: t.inFont,
                borderRadius: t.inRad,
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-12 h-12 bg-solar-primary text-white rounded-xl flex items-center justify-center hover:bg-solar-deep transition-colors disabled:opacity-50 shadow-md"
              aria-label="Send message"
              style={{
                width: t.sendW,
                height: t.sendH,
                borderRadius: t.sendRad,
                flexShrink: 0,
              }}
            >
              <i className="fas fa-paper-plane text-sm" style={{ fontSize: t.sendIcon }}></i>
            </button>
          </form>
        </div>
      )}
    </div>
    </>
  );
};

export default ChatBot;