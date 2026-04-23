import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inisialisasi Gemini (PENTING: Hanya untuk project portofolio sederhana / local)
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || '');

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    {
      role: 'bot',
      content: "Hoo... Salam, Traveler! Saya adalah Courier_Bot (v1.0). Ada yang bisa saya bantu terkait profil atau perjalanan sang Developer?",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    // Menambahkan pesan pengguna ke state
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!apiKey) {
        throw new Error("API Key tidak ditemukan di environment variables.");
      }

      // Menyiapkan model AI (menggunakan gemini-2.5-flash)
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      });

      // Karena gemini-pro versi standar tidak selalu mendukung properti systemInstruction,
      // kita akan memberinya instruksi lewat "pesan pertama" imajiner dalam riwayat obrolan
      const systemPrompt = "Sistem Instruksi: Kamu adalah asisten virtual RPG bergaya kucing pengantar pesan bernama Courier_Bot di website portofolio M. Rivaldy Yusup. Jawab pertanyaan seputar portofolionya (React, Web Dev, dll) dengan bahasa yang ringkas, padat, ramah, dan bernuansa petualangan game RPG. Jangan menjawab hal absurd di luar portofolio.";

      const history = [
        // Pesan pertama sebagai "Suntikan Sistem"
        {
          role: "user",
          parts: [{ text: systemPrompt }]
        },
        {
          role: "model",
          parts: [{ text: "Baik, saya mengerti. Saya akan berperan sebagai Courier_Bot dan memandu Traveler." }]
        },
        // Memasukkan sisa obrolan antara user dan bot di website
        ...messages
          .filter((msg, index) => !(index === 0 && msg.role === 'bot'))
          .map(msg => ({
            role: msg.role === 'bot' ? 'model' : 'user',
            parts: [{ text: msg.content }]
          }))
      ];

      const chatSession = model.startChat({
        history: history,
      });

      // Mengirim pesan ke AI
      const result = await chatSession.sendMessage(userMessage);
      const responseText = result.response.text();

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: responseText,
        },
      ]);
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.message || "Koneksi ke pemikir pusat terputus.";
      
      let botReply = `[SYSTEM ERROR] ${errorMessage}`;
      if (errorMessage.includes("503") || errorMessage.includes("high demand") || errorMessage.includes("overloaded")) {
        botReply = "Meow... [SERVER OVERLOAD] Maaf Traveler, menara komunikasi ke dunia pusat sedang penuh sesak saat ini karena terlalu banyak permintaan (503). Tolong tunggu sebentar dan coba tanyakan lagi pada saya!";
      } else if (errorMessage.toLowerCase().includes("api key") || errorMessage.includes("403")) {
        botReply = `[SYSTEM ERROR] ${errorMessage}\n\n*Tips: Periksa API Key di .env, lalu restart server dengan npm run dev.*`;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: botReply,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-[#131b2e] border-2 border-[#e9c349] w-80 md:w-96 h-[400px] mb-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] flex flex-col animate-bob">
          {/* Header */}
          <div className="bg-[#002367] p-3 border-b-2 border-[#e9c349] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e9c349] text-sm">smart_toy</span>
              <h3 className="font-headline font-bold text-[#dae2fd] text-sm tracking-wider uppercase">Courier_Bot.exe</h3>
            </div>
            <button onClick={toggleChat} className="text-[#b4c5ff] hover:text-[#e9c349] transition-colors">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-body text-sm bg-[#0b1326]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] p-3 border ${
                    msg.role === 'user'
                      ? 'bg-[#002367]/50 border-[#b4c5ff]/30 text-[#dae2fd]'
                      : 'bg-[#e9c349]/10 border-[#e9c349]/30 text-[#e9c349]'
                  }`}
                >
                  <p className="text-xs leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] p-3 border bg-[#e9c349]/10 border-[#e9c349]/30 text-[#e9c349]">
                  <p className="text-xs leading-relaxed animate-pulse">CONNECTING TO DATABANKS...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} className="p-3 bg-[#131b2e] border-t border-[#444650] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              placeholder={isLoading ? "SYSTEM PROCESSING..." : "ENTER COMMAND..."}
              className="flex-1 bg-[#060e20] border border-[#444650] text-[#b4c5ff] text-xs p-2 focus:outline-none focus:border-[#e9c349] font-headline placeholder:text-opacity-50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#e9c349] text-[#002367] px-3 py-2 font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                send
              </span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <button
        onClick={toggleChat}
        className="bg-[#e9c349] text-[#002367] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(233,195,73,0.4)] hover:scale-105 active:scale-95 transition-all border-2 border-[#131b2e]"
      >
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>
          {isOpen ? 'keyboard_arrow_down' : 'chat'}
        </span>
      </button>
    </div>
  );
};

export default Chatbot;