import { Box, Input, Button, VStack, Text } from "@chakra-ui/react";
import { useState }  from  "react";
import { ChakraProvider } from '@chakra-ui/react';

interface MessageProps {
    text: string;
    sender: string;
}

const Chat = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([] as MessageProps[]);
    
    const handleSendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, {text: input, sender: "user"}]);
        setInput("");
    };
    
    return (
        <VStack p={4} align="stretch">
            <Box border="1px solid #ccc" p={4} borderRadius="md" h="400px" overflowY="auto">
                {messages.map((msg, index) => (
                    <Text key={`${msg.sender}-${index}`} textAlign={msg.sender === "user" ? "right" : "left"}>
                        {msg.text}
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

export default Chat;