"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();

        let finalMessage = message.trim();
        if (!finalMessage) finalMessage = "Hi, I would like to know more about your services.";

        const phoneNumber = "917004557002";
        const encodedMessage = encodeURIComponent(finalMessage);

        // Open WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

        // Optional: Close widget after sending
        // setIsOpen(false);
        setMessage("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden w-[350px] max-w-[calc(100vw-48px)] origin-bottom-right"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Let’s chat on WhatsApp</h3>
                                    <p className="text-xs text-white/90">Typically replies immediately</p>
                                </div>
                            </div>
                            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[#E5DDD5] h-[200px] flex flex-col justify-end">
                            <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm self-start max-w-[85%] text-sm text-neutral-800 relative">
                                <span className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></span>
                                How can I help you? 🙂
                                <span className="block text-[10px] text-neutral-400 text-right mt-1">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-neutral-100 flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-neutral-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="rounded-full h-9 w-9 bg-[#25D366] hover:bg-[#128C7E] text-white shrink-0"
                            >
                                <Send size={16} />
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors relative group"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>

                {/* Tooltip */}
                {!isOpen && (
                    <span className="absolute right-full mr-4 bg-white text-neutral-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Contact Us
                    </span>
                )}
            </motion.button>
        </div>
    );
}
