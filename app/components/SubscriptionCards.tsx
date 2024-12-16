"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Sparkles, Brain, Link } from "lucide-react";

const subscriptions = [
  {
    name: "Launch Pad",
    icon: Rocket,
    color: "bg-blue-500",
    audience:
      "Perfect for startups and small businesses just beginning their online journey.",
    features: [
      "Custom website with 3 - 5 essential pages",
      "Mobile-responsive design",
      "Domain registration assistance",
      "Basic SEO setup",
    ],
    pricing: "Starting from $79",
    benefits:
      "Establish a professional online presence quickly and affordably.",
    duration: "2-3 weeks",
    tagline: "Your first step into the digital world",
  },
  {
    name: "Growth Booster",
    icon: Zap,
    color: "bg-green-500",
    audience:
      "Ideal for growing businesses looking to expand their digital footprint.",
    features: [
      "Everything in Launch Pad",
      "E-commerce functionality",
      "Advanced SEO and analytics",
      "Social media integration",
      "Email marketing setup",
    ],
    pricing: "Starting from $250",
    benefits: "Accelerate your online growth and reach a wider audience.",
    duration: "4-6 weeks",
    tagline: "Supercharge your online presence",
  },
  {
    name: "AI Innovator",
    icon: Sparkles,
    color: "bg-purple-500",
    audience:
      "For businesses ready to leverage AI for enhanced customer experiences.",
    features: [
      "Everything in Growth Booster",
      "AI-powered chatbot integration",
      "Personalized product recommendations",
      "Automated customer segmentation",
      "Predictive analytics dashboard",
    ],
    pricing: "Starting from $1000",
    benefits:
      "Harness the power of AI to optimize operations and boost customer satisfaction.",
    duration: "8-10 weeks",
    tagline: "Bring your business into the AI era",
  },
  {
    name: "Digital Mastermind",
    icon: Brain,
    color: "bg-red-500",
    audience:
      "For enterprises seeking full digital transformation and AI integration.",
    features: [
      "Everything in AI Innovator",
      "Custom AI model development",
      "Full-scale automation of business processes",
      "Advanced data analytics and visualization",
      "24/7 priority support and maintenance",
    ],
    pricing: "Custom pricing, typically $3,000",
    benefits:
      "Achieve complete digital transformation and stay ahead of the competition.",
    duration: "12-16 weeks",
    tagline: "Revolutionize your entire digital ecosystem",
  },
];

export default function SubscriptionCards() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        Choose Your Digital Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {subscriptions.map((sub, index) => (
          <motion.div
            key={sub.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 overflow-hidden shadow-pink-800 shadow-lg">
              <CardHeader className={`${sub.color} text-white`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">
                    {sub.name}
                  </CardTitle>
                  <sub.icon size={24} />
                </div>
                <CardDescription className="text-white/80 mt-2">
                  {sub.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4">{sub.audience}</p>
                <ul className="space-y-2">
                  {sub.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <Badge variant="secondary" className="mb-2">
                  {sub.duration}
                </Badge>
                <p className="text-lg font-semibold mb-2">{sub.pricing}</p>
                <p className="text-sm text-gray-600 mb-4">{sub.benefits}</p>
                <Link href="/contact">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
