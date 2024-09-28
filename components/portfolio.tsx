"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { LinkedinIcon, TwitterIcon, GithubIcon/* , WhatsappIcon */, Menu, DownloadIcon, SunIcon, MoonIcon} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export function PortfolioComponent() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-teal-600 text-white p-6 relative h-64">
        {/*<div className={"absolute inset-0  bg-cover bg-center w-full h-full z-10 opacity-20"}> </div>*/}
        <nav className="relative max-w-6xl mx-auto z-10 flex justify-between items-center mb-16">
          <a href="#" className="text-xl font-bold">Hamza benfaddoul</a>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="text-sm hover:underline">About</a>
            <a href="#skill" className="text-sm hover:underline">Skills</a>
            <a href="#portfolio" className="text-sm hover:underline">Portfolio</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
            <div className="flex items-center space-x-2">
              <SunIcon className="w-4 h-4" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <MoonIcon className="w-4 h-4" />
            </div>
          </div>
        <Sheet>

          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-teal-800">

            <nav className="flex flex-col space-y-4">

          <div className="flex items-center space-x-2">
            <SunIcon className="w-4 h-4" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <MoonIcon className="w-4 h-4" />
        </div>
                <a href="#about" className="text-sm hover:underline">About</a>
                <a href="#skill" className="text-sm hover:underline">Skills</a>
                <a href="#portfolio" className="text-sm hover:underline">Portfolio</a>
                <a href="#contact" className="text-sm hover:underline">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
        </nav>
      </header>

      <main className="container max-w-6xl  mx-auto px-4 py-8 -mt-32 relative z-20 space-y-16">
        <Card className="p-6 mb-8 text-center bg-white dark:bg-gray-800">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 mx-auto -mt-20 mb-4 bg-teal-500">
            <img src='hbenfadd.jpeg' alt="Hamza Benfaddoul" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold">Hamza Benfaddoul</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Full stack Developer, Software Engineer Student</p>
          <div className="flex justify-center space-x-2 mb-6">
            <Badge variant="secondary">Nextjs</Badge>
            <Badge variant="secondary">Nestjs</Badge>
            <Badge variant="secondary">Porstgres</Badge>
            <Badge variant="secondary">TypeScript</Badge>
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">Hire Me</Button>
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8" id="about">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <Card className="p-4 h-full bg-white dark:bg-gray-800">
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hello! I am Hamza Benfaddoul, Web Developer and software engineer student at 1337. I am passionate about technology and I am always looking for new ways to learn and grow. I enjoy working with others to solve problems, and I&apos;m confident that I have the skills necessary to be successful in this field.</p>
                <a href="#" className="text-teal-600 dark:text-teal-400 text-sm mt-2 inline-block">Learn More</a>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
            <Card className="p-4 h-full bg-white dark:bg-gray-800">
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">AGE:</p>
                    <p className="text-gray-600 dark:text-gray-400">24</p>
                  </div>
                  <div>
                    <p className="font-semibold">EMAIL:</p>
                    <p className="text-gray-600 dark:text-gray-400">benfaddoul97@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">PHONE:</p>
                    <p className="text-gray-600 dark:text-gray-400">+212 642140317</p>
                  </div>
                  <div>
                    <p className="font-semibold">ADDRESS:</p>
                    <p className="text-gray-600 dark:text-gray-400">Benguerir, Morocco</p>
                  </div>
                  <div>
                    <p className="font-semibold">LANGUAGE:</p>
                    <p className="text-gray-600 dark:text-gray-400">Arabic, English, French</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <section id="skill">
          <h2 className="text-2xl font-semibold mb-4">Professional Skills</h2>
          <Card className="p-4 bg-white dark:bg-gray-800">
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Nextjs</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Nestjs</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>TypeScript</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65}  className="w-full  " />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>CSS</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="portfolio">
          <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
          <div className="mx-auto">
            <Tabs defaultValue="web-development">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="web-development">Web Development</TabsTrigger>
                <TabsTrigger value="system-administration">System Administration</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
              </TabsList>
              <TabsContent value="web-development">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-white dark:bg-gray-800">
                    <img src="ft_transcendence/lightMode.jpg" alt="Ft Transcendence" className="w-full h-48 object-cover" />
                    <CardContent>
                      <h3 className="text-lg font-semibold mt-2">Ft Transcendence</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Web Development</p>
                      <p className="text-sm">A real-time multiplayer Pong game with user authentication, chat functionality, and a matchmaking system. Built with Next.js, NestJS, and WebSocket for real-time features.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white dark:bg-gray-800">
                    <img src="edu-platform/educ-platform.png?height=200&width=300" alt="Edu platform" className="w-full h-48 object-cover" />
                    <CardContent>
                      <h3 className="text-lg font-semibold mt-2">Edu platform</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Web Development</p>
                      <p className="text-sm">An online learning platform featuring course management, student progress tracking, and interactive quizzes. Developed using React and Node.js with a focus on user experience and accessibility.</p>
                      <div className="flex space-x-2 mt-2">
                        <a href="https://github.com/Hamza-benfaddoul/mls-platform/tree/edu-platform" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"><GithubIcon className="w-4 h-4" /></Button>
                        </a>
                        <a href="https://educ-platform.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">Live Demo</Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="system-administration">
                <Card className="bg-white dark:bg-gray-800">
                  <img src="inception/inception.webp?height=200&width=300" alt="Inception" className="w-full h-48 object-cover" />
                  <CardContent>
                    <h3 className="text-lg font-semibold mt-2">Inception</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Docker</p>
                    <p className="text-sm">A project focused on Docker and system administration. It involves setting up a small infrastructure composed of different services under specific rules, emphasizing containerization and service orchestration.</p>
                    <a href="https://github.com/Hamza-benfaddoul/inception" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block">
                      <Button size="sm" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"><GithubIcon className="w-4 h-4 mr-2" /> View on GitHub</Button>
                    </a>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="programming">
                <Card className="bg-white dark:bg-gray-800">
                  <img src="webserv/webserv.png?height=200&width=300" alt="HTTP Server" className="w-full h-48 object-cover" />
                  <CardContent>
                    <h3 className="text-lg font-semibold mt-2">HTTP Server</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">C++98</p>
                    <p className="text-sm">A custom HTTP server implemented in C++98. This project demonstrates low-level networking, concurrent programming, and adherence to the HTTP protocol specifications.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="experience">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Web Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ambidex | April 2024 - Present</p>
              <p className="text-sm">
                At Ambidex, I work as a web developer, focusing on creating user-friendly web applications for various clients. I am responsible for the front-end and back-end development processes, utilizing technologies like TypeScript, Next.js, and Nest.js to build dynamic and interactive user interfaces.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Computer Architect</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">1337 school | 2022 - Present</p>
              <p className="text-sm">
                This certificate guarantees the student graduated from a school in the 42 network. -- Expert in multiple IT fields, the Computer Architect can lead complex IT projects, manage teams, and even venture into entrepreneurship.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input id="name" placeholder="Name" className="bg-gray-100 dark:bg-gray-700" />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <Input id="subject" placeholder="Subject" className="bg-gray-100 dark:bg-gray-700" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input id="email" type="email" placeholder="Email" className="bg-gray-100 dark:bg-gray-700" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" placeholder="Your Message" className="bg-gray-100 dark:bg-gray-700" />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">Send</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 p-4 text-center border-t mt-16">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/hamza-benfaddoul" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400" />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterIcon className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400" />
          </a>
          <a href="https://www.github.com/hamza-benfaddoul" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400" />
          </a>
          {/* <a href="https://wa.me/212607648197" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsappIcon className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400" />
          </a> */}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Hamza Benfaddoul. All rights reserved.</p>
      </footer>
    </div>
  )
}
