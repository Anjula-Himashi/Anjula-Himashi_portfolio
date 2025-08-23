import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SmoothScroll } from "@/components/smooth-scroll";
import { HeroSection } from "@/components/hero-section";
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I am a third-year Computer Science undergraduate at the
                  University of Colombo School of Computing, known for being a
                  well-rounded, self-driven team player with excellent
                  interpersonal skills.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I am a fast learner, eager to master new technologies, and
                  aspire to excel as a Software Engineer, contributing
                  meaningfully to my team and the organization.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  With experience in mobile and web application development, I
                  specialize in creating digital solutions that solve real-world
                  problems, particularly in healthcare and productivity domains.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Areas of Interest
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Mobile Application Development
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Web Application Development
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Game Development
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Healthcare Technology Solutions
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      AI-Powered Applications
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Work Experience
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Quality Control Assistant
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      CIB Purchasing Department
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    2022 - 6 months
                  </p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Maintained stock records and assisted with regular inventory
                    checks
                  </li>
                  <li>
                    Checked product quality, identified defects, and ensured
                    only approved items were displayed
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Quality Control Assistant
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Dipped Production PLC
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    2022 - 4 months
                  </p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Inspected gloves for defects during production, ensured
                    quality standards were met
                  </li>
                  <li>Reported faulty items for replacement or correction</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Key Roles & Leadership
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-lg font-bold">Chief Organizer</h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    Exploration Club of UCSC
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Organized and conducted teaching sessions for school students, as well as seminars, workshops, and events at the university to promote knowledge sharing and skill development
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-lg font-bold">Member</h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    UCSC ACM Student Chapter
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Actively participated in club meetings and contributed to various activities and initiatives organized by the club
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 bg-white dark:bg-gray-800 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>MediLink Services</CardTitle>
                  <CardDescription>
                    Digital healthcare platform ecosystem
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/healthcare-digital-platform.jpg"
                      alt="MediLink Services"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    A comprehensive digital healthcare platform connecting
                    doctors, nurses, hospital staff, and patients through
                    MediVault Pro, MediVault Command, and Health Tracker app.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Flutter
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      PostgreSQL
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Node.js
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full relative overflow-hidden group bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">May 2025 - Present</span>
                    <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>ReMeD</CardTitle>
                  <CardDescription>Medicine delivery platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/medicine-delivery-app.png"
                      alt="ReMeD Platform"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    A digital platform connecting patients, pharmacies, and
                    delivery personnel to simplify medicine ordering and
                    delivery with real-time drug availability access.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                    >
                      PHP
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                    >
                      HTML/CSS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-green-100/50 dark:bg-green-900/50 hover:bg-green-200 transition-colors duration-300"
                    >
                      Kotlin
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full relative overflow-hidden group bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">
                      July 2024 - April 2025
                    </span>
                    <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>ReMeD Predict</CardTitle>
                  <CardDescription>
                    AI-powered disease prediction system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/ai-medical-prediction-interface.png"
                      alt="ReMeD Predict"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    An AI-powered system that predicts possible diseases based
                    on user-input symptoms, helping users identify potential
                    health issues and seek timely medical attention.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      Ballerina
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      HTML/CSS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      AI/ML
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full relative overflow-hidden group bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">October 2024</span>
                    <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Focus Bloom</CardTitle>
                  <CardDescription>
                    Gamified task management app
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/gamified-productivity-app.png"
                      alt="Focus Bloom"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-yellow-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    A gamified task management app with timers, progress
                    tracking, and in-app rewards that enhance an avatar's life
                    as tasks are completed.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-orange-100/50 dark:bg-orange-900/50 hover:bg-orange-200 transition-colors duration-300"
                    >
                      Kotlin
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-100/50 dark:bg-orange-900/50 hover:bg-orange-200 transition-colors duration-300"
                    >
                      Gamification
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-100/50 dark:bg-orange-900/50 hover:bg-orange-200 transition-colors duration-300"
                    >
                      Mobile App
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-100/50 dark:bg-orange-900/50 hover:bg-orange-200 transition-colors duration-300"
                    >
                      Productivity
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full relative overflow-hidden group bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">
                      May 2025 - August 2025
                    </span>
                    <span className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                <CardHeader>
                  <CardTitle>Kirinda</CardTitle>
                  <CardDescription>3D adventure game</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/haunted-adventure-game.png"
                      alt="Kirinda Game"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    A 3D adventure game where players navigate a haunted
                    environment, solve puzzles, collect clues, and escape a
                    ghost to complete objectives. Focused on game mechanics and
                    interactive environment design.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-red-100/50 dark:bg-red-900/50 hover:bg-red-200 transition-colors duration-300"
                    >
                      Unity
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-red-100/50 dark:bg-red-900/50 hover:bg-red-200 transition-colors duration-300"
                    >
                      C#
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-red-100/50 dark:bg-red-900/50 hover:bg-red-200 transition-colors duration-300"
                    >
                      3D Game Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-red-100/50 dark:bg-red-900/50 hover:bg-red-200 transition-colors duration-300"
                    >
                      Game Mechanics
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full relative overflow-hidden group bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">
                      May 2025 - August 2025
                    </span>
                    <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technical Skills
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">
                        LANG
                      </span>
                    </span>
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Java
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Dart
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      PHP
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      C/C++
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Scala
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      HTML/CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Kotlin
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">
                        FRAME
                      </span>
                    </span>
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Springboot
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Flutter
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      ReactJS
                    </Badge>
                    {/* <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      NextJS
                    </Badge> */}
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      NodeJS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Tailwind CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Unity
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Ballerina
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      TypeScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">
                        DB
                      </span>
                    </span>
                    Databases & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      MySQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      PostgreSQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Git
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Figma
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Canva
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Blender
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Jira
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">
                        SOFT
                      </span>
                    </span>
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Leadership
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Communication
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Problem Solving
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Time Management
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Adaptability
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Team Management
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Critical Thinking
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Digital Marketing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skills Tags */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  Linux
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  Mobile Development
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                >
                  Web Development
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  Game Development
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
                >
                  UI/UX Design
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
                >
                  3D Modeling
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
                >
                  Project Management
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
                >
                  Quality Assurance
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 px-4 bg-white dark:bg-gray-800 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Bachelor of Science (BSc), Computer Science
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      University of Colombo School of Computing
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    July 2022 - Present
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>GPA:</strong> 3.399 / 4.0
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Key Areas of Study:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Software Engineering</Badge>
                    <Badge variant="secondary">
                      Data Structures & Algorithms
                    </Badge>
                    <Badge variant="secondary">Database Systems</Badge>
                    <Badge variant="secondary">Middleware Architecture</Badge>
                    <Badge variant="secondary">Mobile App Development</Badge>
                    <Badge variant="secondary">Game Development</Badge>
                    {/* <Badge variant="secondary">AI & Machine Learning</Badge> */}
                    <Badge variant="secondary">
                      Human-Computer Interaction
                    </Badge>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Advanced Level (A/L), Physical Science Stream
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      Visakha Vidyalaya, Colombo 04
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    2021
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Results:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <p className="font-semibold text-green-600 dark:text-green-400">
                        Physics
                      </p>
                      <p className="text-2xl font-bold">A</p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <p className="font-semibold text-blue-600 dark:text-blue-400">
                        Mathematics
                      </p>
                      <p className="text-2xl font-bold">B</p>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <p className="font-semibold text-purple-600 dark:text-purple-400">
                        Chemistry
                      </p>
                      <p className="text-2xl font-bold">B</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="tel:074-079-4161"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      074-079-4161
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="mailto:anjulahimashi2@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      anjulahimashi2@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/Anjula-Himashi"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      rel="noreferrer"
                    >
                      anjula-himashi
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="https://github.com/anjula-himashi"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      rel="noreferrer"
                    >
                      Anjula-Himashi
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm always open to discussing new projects, internship
                    opportunities, or collaborations. Feel free to reach out!
                  </p>
                </div>

                {/* References Section */}
                <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-4">References</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Chaminda Ranasinghe</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Founder / CEO at IDEAHUB (PVT) LTD
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Phone: 077 744 4443
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Email: crc@ucsc.cmb.ac.lk
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Thiran Sasanka</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Associate Software Engineer at Tachyon (PVT) LTD
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Phone: 078 940 4985
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Email: thiran@tachyon.lk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Anjula Himashi</h2>
              <p className="text-gray-400">Computer Science Undergraduate</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/anjula-himashi-a42874253"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/anjula-himashi"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="tel:074-079-4161"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Phone className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:anjulahimashi2@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Anjula Himashi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
