import { Box, Input, Button, VStack, Text } from "@chakra-ui/react";
import { useState }  from  "react";

const ChatUI = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    
    const handleSendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, {text: input, sender: "user"}]);
        setInput("");
        // Placeholder for backend response
        setChat((prev) => [...prev, { sender: 'ai', text: 'Thinking...' }]);
  
    };
    
    return (
        <VStack spacing={4} p={4} align="stretch">
        <Box  border="1 px solid #ccc" p={4} borderRadius="md" h="400px" overflowY="auto">
            {messages.map((msg, index) => (
            <Text key={`${msg.sender}-${index}`} align={msg.sender === "user" ? "right" : "left"}>
                {message.text}
            </Text>
            ))}
        </Box>
        <Box display="flex">
        <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
        />
        <Button onClick={handleSendMessage} ml={2}>Send</Button>
        </Box>
        </VStack>
    );
    }

export default ChatUI;
