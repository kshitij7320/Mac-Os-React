import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'Hi, I am Kshitij Himanshu 👋,A passionate Full Stack Developer focused on building modern, responsive, and scalable web applications.I enjoy creating interactive frontend experiences using React.js and building backend APIs with Node.js & Express.js. Currently exploring advanced React architecture, backend systems, and AI-powered applications.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React.js, Vanilla JS, Sass, HTML/CSS, Tailwind Css, Bootstrap, Material UI
Backend: Node.js, Express
Databases: MongoDB, Mongoose
Tools: Git, Docker, Webpack, Vite, Github, Postman, Linux, Redux Toolkit, Axios, Firebase, Zustand
Programming: Javascript, Python`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. Cryptoplace - React.js + CoinGecko API + React charts
3. AI Clone - React.js + Puter.js + OpenAI API`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `SDE-1 @ Bluestock Fintech (June 2025 - July 2025)
  - Led development of IPO React applications`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: kshitij.himanshu.fullstack@gmail.com
Phone: +91-878-979-1324
Location: Noida, India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/kshitij7320', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `
LinkedIn: /in/kshitij-himanshu
Portfolio: portfolio-kshitij.shop`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'kshitijhimanshu:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli