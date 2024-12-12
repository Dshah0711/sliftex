import { useRef } from "react";
import "./Chatbot.css"
const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        
        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

        
        setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);

        
        setTimeout(() => {
            try {
                generateBotResponse([...chatHistory, { role: "user", text:` Using the details provide above,please address this query:${userMessage}` }]);
            } catch (error) {
                console.error("Error generating bot response:", error);
                setChatHistory((history) => [...history, { role: "model", text: "Error generating response." }]);
            }
        }, 600);
    };

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
            <button className="material-symbols-rounded">arrow_upward</button>
        </form>
    );
};

export default ChatForm;