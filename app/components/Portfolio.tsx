"use client";

import { motion, useAnimation } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";
import Link from "next/link";

export default function Portfolio() {
  const controls = useAnimation();
  const skillsControls = useAnimation();
  const typedText = useTypingAnimation(
    "I’m a passionate and skilled Full Stack Developer with a strong background in Computer Science, holding a degree from Masinde Muliro University of Science and Technology. I specialize in creating modern, user-friendly websites and applications using technologies like Python, JavaScript, Node.js, React, and Next.js. With experience in developing full-stack solutions, I focus on delivering scalable, efficient, and practical systems tailored to meet your needs. Whether it’s building responsive websites, crafting seamless user experiences, or solving complex technical challenges, I’m here to help bring your ideas to life. Let’s work together to create innovative and impactful software solutions for your business!",
    20 // 50 words per minute is approximately 20ms per character
  );

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }));

    skillsControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }));
  }, [controls, skillsControls]);

  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Appwrite",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8">
      <header className="container mx-auto py-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Isaac Mayodi
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-center mt-4 text-gray-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.p>
      </header>

      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="/profile.jpg"
              alt="Isaac Mayodi"
              width={500}
              height={500}
              className="relative rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-500">
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>{typedText}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-500">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={skillsControls}
              >
                <Badge
                  variant="secondary"
                  className="text-lg py-2 px-4 bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-500">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Church Management Website",
                picture: "/church.jpg?height=300&width=400",
                description:
                  "Developed a user-friendly platform for church members to interact, manage events, and track donations.",
                tech: "React, Node.js, PostgreSQL",
                impact:
                  "Streamlined church operations with an integrated dashboard for administrators.",
              },
              {
                title: "Graphics Design Shop Website",
                picture: "/graphic.jpg?height=300&width=400",
                description:
                  "Designed and implemented an online portfolio and booking system for a local graphics design shop.",
                tech: "Next.js, Firebase",
                impact:
                  "Increased client engagement and reservations by 40% over three months.",
              },
              {
                title: "Writers Management Platform",
                picture: "/writer.jpg?height=300&width=400",
                description:
                  "Created a comprehensive tool for writers to manage their works, track submissions, and receive feedback.",
                tech: "React, Node.js, MySQL",
                impact:
                  "Facilitated better organization and communication between writers and publishers.",
              },
              {
                title: "Automation System for Making Calls",
                picture: "/automation.jpg?height=300&width=400",
                description:
                  "Developed an automated calling system to streamline communication for a business.",
                tech: "Python",
                impact:
                  "Improved response rates by automating client follow-ups.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="flex"
              >
                <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-amber-500 transition-colors overflow-hidden group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.picture}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-pink-500">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      <strong className="text-amber-500">Tech Stack:</strong>{" "}
                      {project.tech}
                    </p>
                    <p>
                      <strong className="text-amber-500">Impact:</strong>{" "}
                      {project.impact}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-500">
            Get in Touch
          </h2>
          <div className="flex gap-3 flex-col md:flex-row items-center justify-center md:space-x-4">
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700 hover:text-amber-500 w-40"
              >
                <Image
                  src="/gmail.png?height=24&width=24"
                  alt="Email"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Email Me
              </Button>
            </Link>
            <Link href="https://ke.linkedin.com/in/isaac-mayodi-16a412304">
              <Button
                variant="outline"
                size="lg"
                className="bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700 hover:text-amber-500 w-40"
              >
                <Image
                  src="/linkedin.png?height=24&width=24"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/mayodi3">
              <Button
                variant="outline"
                size="lg"
                className="bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700 hover:text-amber-500 w-40"
              >
                <Image
                  src="/github.png?height=24&width=24"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                GitHub
              </Button>
            </Link>
            <Link href="">
              <Button
                variant="outline"
                size="lg"
                className="bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700 hover:text-amber-500 w-40"
              >
                <Image
                  src="/facebook.png?height=24&width=24"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Facebook
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="container mx-auto py-8 text-center text-gray-400">
        <p>&copy; 2023 Isaac Mayodi. All rights reserved.</p>
      </footer>
    </div>
  );
}
