import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavbarMenu from './NavbarMenu'
import About from './About'
import Projects from './Projects'
import Designs from './Designs'
import Contact from './Contact'

const roles = [
  "Aspiring IT Engineer",
  "Full Stack Developer",
  "Frontend & Backend Explorer",
  "Problem Solver",
]

const Home = () => {
  const [text,      setText]      = useState("")
  const [index,     setIndex]     = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const typing = setTimeout(() => {
      setText(roles[index].slice(0, charIndex + 1))
      setCharIndex(charIndex + 1)

      if (charIndex === roles[index].length) {
        setTimeout(() => {
          setCharIndex(0)
          setIndex((index + 1) % roles.length)
        }, 1500)
      }
    }, 80)
    return () => clearTimeout(typing)
  }, [charIndex, index])

  return (
    <>
      <Container id="home">
        <NavbarMenu />

        <MainContent>
          <Hero>
            <Intro>Hello, I'm</Intro>
            <Title><Highlight>Sujal Shrestha</Highlight></Title>
            <TypingText>{text}|</TypingText>
            <Description>
              I build modern, responsive web applications with clean UI and smooth
              user experience. Passionate about turning ideas into real-world
              digital solutions.
            </Description>
            <Buttons>
              <PrimaryBtn href="/CV.pdf" download>Download CV</PrimaryBtn>
              <SecondaryBtn href="#contact">Contact Me</SecondaryBtn>
            </Buttons>
          </Hero>

          <RightSide>
            <CodeBlock>
              <CodeHeader>
                <span /><span /><span />
              </CodeHeader>
{`const developer = {
  name: "Sujal Shrestha",
  role: "Aspiring Full Stack Developer",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  passion: "Turning ideas into real web experiences",
  location: "Kathmandu, Nepal"
};`}
            </CodeBlock>
          </RightSide>
        </MainContent>
      </Container>

      <About />
      <Projects />
      <Designs />
      <Contact />
    </>
  )
}

export default Home


const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  font-family: "Poppins", sans-serif;
`

const MainContent = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 100px clamp(5%, 10vw, 12%) 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 110px;
  }
`

const Hero = styled.div`
  max-width: 600px;
  flex: 1;
`

const Intro = styled.p`
  font-size: clamp(15px, 1.4vw, 18px);
  color: #9ed9c8;
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: clamp(42px, 6vw, 80px);
  margin-bottom: 15px;
  line-height: 1.1;
`

const Highlight = styled.span`
  color: #38bdf8;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%; height: 5px;
    background: #38bdf8;
    bottom: -5px; left: 0;
    opacity: 0.3;
    border-radius: 2px;
  }
`

const TypingText = styled.h3`
  font-size: clamp(18px, 2.2vw, 28px);
  font-weight: 400;
  color: #9ed9c8;
  min-height: 36px;
  margin-bottom: 25px;
`

const Description = styled.p`
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.7;
  color: #cbd5f5;
  margin-bottom: 35px;
  max-width: 520px;

  @media (max-width: 900px) { margin: 0 auto 35px; }
`

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 900px) { justify-content: center; }
`

const PrimaryBtn = styled.a`
  padding: 12px 28px;
  background: #38bdf8;
  color: black;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #0ea5e9;
    transform: translateY(-2px) scale(1.04);
  }
`

const SecondaryBtn = styled.a`
  padding: 12px 28px;
  border: 1.5px solid #38bdf8;
  color: #38bdf8;
  border-radius: 8px;
  font-size: 15px;
  transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #38bdf8;
    color: black;
    transform: translateY(-2px);
  }
`

const RightSide = styled.div`
  width: min(520px, 45vw);
  flex-shrink: 0;

  @media (max-width: 900px) { width: min(500px, 90vw); }
`

const CodeBlock = styled.pre`
  background: #020617;
  color: #38bdf8;
  padding: clamp(20px, 3vw, 35px);
  border-radius: 18px;
  font-size: clamp(13px, 1.2vw, 16px);
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: break-word;
  box-shadow: 0 25px 60px rgba(0,0,0,0.7);
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 35px 80px rgba(0,0,0,0.9);
  }
`

const CodeHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  span { width: 11px; height: 11px; border-radius: 50%; }
  span:nth-child(1) { background: #ef4444; }
  span:nth-child(2) { background: #facc15; }
  span:nth-child(3) { background: #22c55e; }
`