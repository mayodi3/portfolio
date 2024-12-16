"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., sending data to a server
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-12"
      >
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500">
          Contact Me
        </h1>
        <Card className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-lg border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-500">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-amber-500 mb-4">
            Or reach out directly:
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Phone className="text-pink-500 mr-2" />
              <span>+254 707 317 185</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-pink-500 mr-2" />
              <span>mayodisaac3@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
