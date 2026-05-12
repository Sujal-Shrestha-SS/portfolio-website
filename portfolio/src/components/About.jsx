import React from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa'

const About = () => {
  return (
    <Container id="about">
      <ContentWrapper>

        <ImageCard>
          <ProfileImage src="images/profile.png" alt="Profile Picture" />
        </ImageCard>

        <RightContent>
          <AboutTitle>About Me</AboutTitle>

          <AboutText>
            I am an aspiring IT Engineer passionate about learning web development and building modern, user-friendly web applications. I enjoy turning ideas into interactive web experiences and continuously improving my skills through projects and practice.
          </AboutText>

          <InfoRow>
            <InfoCard>
              <CardTitle>Education</CardTitle>
              <EducationGrid>
                <span>BE IT</span>
                <span>Pokhara University</span>
                <span>2023 – Present</span>
                <span>6th Sem</span>
              </EducationGrid>
              <EducationGrid>
                <span>+2 Science</span>
                <span>Trinity International College</span>
                <span>2021 – 2023</span>
                <span>3.84</span>
              </EducationGrid>
              <EducationGrid>
                <span>SEE</span>
                <span>Xavier International School</span>
                <span>2021</span>
                <span>4.0</span>
              </EducationGrid>
            </InfoCard>

            <InfoCard>
              <CardTitle>Tech Stack</CardTitle>
              <TechList>
                <TechItem><FaHtml5 /><span>HTML</span></TechItem>
                <TechItem><FaCss3Alt /><span>CSS</span></TechItem>
                <TechItem><FaJs /><span>JS</span></TechItem>
                <TechItem><FaReact /><span>React</span></TechItem>
                <TechItem><FaGitAlt /><span>Git</span></TechItem>
                <TechItem><FaFigma /><span>Figma</span></TechItem>
              </TechList>
            </InfoCard>
          </InfoRow>
        </RightContent>

      </ContentWrapper>
    </Container>
  )
}

export default About


const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  padding: 80px clamp(5%, 7.5vw, 10%);
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: clamp(30px, 5vw, 80px);
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`

const ImageCard = styled.div`
  width: clamp(220px, 30vw, 380px);
  height: clamp(270px, 37vw, 470px);
  flex-shrink: 0;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  transition: transform 0.4s ease;

  &:hover { transform: translateY(-10px) scale(1.03); }

  @media (max-width: 900px) {
    width: clamp(160px, 55vw, 260px);
    height: clamp(190px, 65vw, 320px);
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ImageCard}:hover & { transform: scale(1.08); }
`

const RightContent = styled.div`
  flex: 1;
  color: white;
  min-width: 0;
`

const AboutTitle = styled.h2`
  font-size: clamp(28px, 3.5vw, 48px);
  margin-bottom: 18px;
`

const AboutText = styled.p`
  font-size: clamp(14px, 1.3vw, 17px);
  line-height: 1.75;
  color: #cfd8dc;
  margin-bottom: 36px;
  max-width: 480px;
  text-align: justify;

  @media (max-width: 900px) {
    margin: 0 auto 36px;
    text-align: center;
  }
`

const InfoRow = styled.div`
  display: flex;
  gap: clamp(16px, 2.5vw, 30px);

  @media (max-width: 640px) { flex-direction: column; }
`

const InfoCard = styled.div`
  flex: 1;
  padding: clamp(16px, 2vw, 25px);
  border-radius: 18px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 0;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  }
`

const CardTitle = styled.h3`
  font-size: clamp(16px, 1.5vw, 20px);
  margin-bottom: 12px;
  color: #38bdf8;
`

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px 10px;
  margin-top: 10px;

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 2fr 1.4fr 0.8fr;
  }

  span {
    padding: 6px 8px;
    border-radius: 6px;
    font-size: clamp(11px, 1vw, 13px);
    color: #cfd8dc;
    background: rgba(255,255,255,0.04);
    text-align: center;
  }
`

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 8px;
  background: #1e293b;
  color: white;
  font-size: clamp(12px, 1.1vw, 14px);
  transition: background 0.25s ease, transform 0.25s ease;
  cursor: default;

  svg {
    font-size: clamp(16px, 1.4vw, 20px);
    flex-shrink: 0;
  }

  &:hover {
    background: #334155;
    transform: translateX(4px);
  }
`