"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, MessageCircle, Send, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  sender: "user" | "bot";
  text: string;
}

const faqs: { [key: string]: { question: string, answer: string } } = {
  "introduction": {
    question: "What is Simshine Technologies?",
    answer: "Simshine Technologies is a forward-thinking web design and development company based in Navi Mumbai, India. We specialize in creating innovative, AI-powered web solutions to elevate your digital presence."
  },
  "services": {
    question: "What services do you offer?",
    answer: "We offer a wide array of services including Website Designing, Website Development, E-commerce Solutions, Graphic Designing, Web Promotion, Content Writing, Domain & Web Hosting, and Mobile App Development."
  },
  "process": {
    question: "What is your development process?",
    answer: "Our process is collaborative and transparent. We start with understanding your vision, move to design and development, and then rigorous testing before launch. We ensure you're involved at every step."
  },
  "quote": {
    question: "How can I request a quote?",
    answer: "You can easily request a quote by visiting our 'Contact Us' page and filling out the form. One of our experts will get back to you shortly to discuss your project in detail."
  },
  "location": {
    question: "Where are you located?",
    answer: "Our office is located in the digital hub of Navi Mumbai, India. However, we serve clients globally, breaking all geographical barriers."
  },
  "technology": {
    question: "What technologies do you use?",
    answer: "We pride ourselves on using cutting-edge technologies. Our stack includes Next.js, React, Node.js, Python, and various AI/ML libraries to build futuristic and high-performance applications."
  }
};

const getBotResponse = (userInput: string): string => {
  const lowerCaseInput = userInput.toLowerCase();
  
  if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
    return "Hello there! I'm Simshine's AI assistant. How can I illuminate your path to digital excellence today? You can ask me about our services, process, or technology.";
  }

  for (const key in faqs) {
    const keywords = key.split('_');
    if (keywords.some(keyword => lowerCaseInput.includes(keyword))) {
      return faqs[key].answer;
    }
  }

  if (lowerCaseInput.includes("service")) return faqs.services.answer;
  if (lowerCaseInput.includes("process")) return faqs.process.answer;
  if (lowerCaseInput.includes("quote")) return faqs.quote.answer;
  if (lowerCaseInput.includes("location") || lowerCaseInput.includes("where")) return faqs.location.answer;
  if (lowerCaseInput.includes("tech")) return faqs.technology.answer;

  return "That's an interesting thought! While I'm still learning, our team of human experts can definitely help you with that. For a detailed conversation, I recommend visiting our 'Contact Us' page.";
};

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Welcome to Simshine! Ask me anything about our services, process, or technology." }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if(isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    const userMessage = inputValue;
    const newMessages: Message[] = [...messages, { sender: "user", text: userMessage }]
    setMessages(newMessages)
    setInputValue("")

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prevMessages => [...prevMessages, { sender: "bot", text: botResponse }])
    }, 500);
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button size="icon" onClick={toggleChat} className="rounded-full w-14 h-14 md:w-16 md:h-16 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 transition-transform duration-300 hover:scale-110">
          <AnimatePresence>
            {isOpen ? (
              <motion.div initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }}>
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
            ) : (
              <motion.div initial={{ rotate: 90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -90, scale: 0 }}>
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="sr-only">Toggle chat</span>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 z-50 w-[calc(100vw-32px)] max-w-sm md:max-w-md"
          >
            <Card className="w-full shadow-lg bg-gray-900/80 backdrop-blur-lg border-cyan-500/30">
              <CardHeader className="flex flex-row items-center justify-between p-4">
                <CardTitle className="flex items-center text-base md:text-lg text-white"><Bot className="mr-2 text-cyan-400"/> Simshine Assistant</CardTitle>
                <Button size="icon" variant="ghost" onClick={toggleChat} className="text-white">
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="h-[300px] md:h-[400px] overflow-y-auto p-4">
                <div className="flex flex-col gap-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}
                    >
                      {message.sender === 'bot' && (
                        <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-black flex-shrink-0">
                          <Bot className="w-5 h-5" />
                        </div>
                      )}
                      <div className={`rounded-lg p-3 max-w-[80%] ${message.sender === 'user' ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-white'}`}>
                        <p className="text-sm md:text-base">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t border-cyan-500/20">
                <div className="relative w-full">
                  <Input
                    placeholder="Ask a question..."
                    className="pr-12 bg-gray-800 border-gray-700 text-white text-sm md:text-base focus:ring-cyan-500"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button size="icon" className="absolute top-1/2 right-1 -translate-y-1/2 bg-cyan-600 hover:bg-cyan-700" onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}