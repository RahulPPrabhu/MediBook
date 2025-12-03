"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
    const [input, setInput] = useState("");
    const { messages, sendMessage } = useChat();

    return (
        <div className="flex flex-col h-screen max-w-2xl mx-auto bg-gray-50 mt-20">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex ${m.role === "user" ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`px-4 py-2 rounded-2xl max-w-xs shadow-sm whitespace-pre-wrap ${m.role === "user"
                                ? "bg-indigo-600 text-white"
                                : "bg-white border border-gray-200 text-gray-800"
                                }`}
                        >
                            {m.parts.map((part, i) => {
                                switch (part.type) {
                                    case 'text':
                                        return <div key={`${m.id}-${i}`}>{part.text}</div>;
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.trim()) return;

                    sendMessage({ text: input });
                    setInput("");
                }}
                className="p-4 border-t bg-white"
            >
                <div className="flex items-center gap-2">
                    <input
                        className="flex-1 px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        value={input}
                        placeholder="Say something..."
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
