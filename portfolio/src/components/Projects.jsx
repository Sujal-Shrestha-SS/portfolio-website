import React from 'react'
import styled from 'styled-components'
import projects from '../data/projectsData'

const Projects = () => {
  return (
    <Container id="projects">
      <SectionTitle>Personal Projects</SectionTitle>

      <ProjectWrapper>
        {projects.map((project, index) => (
          <ProjectBlock key={index}>
            <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.description}`}>
              <ImageCard>
                <ProjectImage src={project.image} alt={project.description} />
                <Overlay>
                  <OverlayText>View Project ↗</OverlayText>
                </Overlay>
              </ImageCard>
            </a>
            <ProjectInfo>{project.title} - {project.description}</ProjectInfo>
          </ProjectBlock>
        ))}
      </ProjectWrapper>
    </Container>
  )
}

export default Projects


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px clamp(5%, 8vw, 12%);
`

const SectionTitle = styled.h1`
  font-size: clamp(28px, 3.5vw, 42px);
  margin-bottom: clamp(36px, 5vw, 60px);
  text-align: center;
`

const ProjectWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(24px, 3vw, 40px);
`

const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;

  ${ImageCard}:hover & {
    transform: scale(1.06);
    filter: brightness(0.55);
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${ImageCard}:hover & { opacity: 1; }
`

const OverlayText = styled.span`
  color: white;
  font-size: clamp(14px, 1.4vw, 17px);
  font-weight: 600;
  padding: 10px 20px;
  border: 1.5px solid rgba(255,255,255,0.6);
  border-radius: 8px;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(4px);
`

const ProjectInfo = styled.p`
  font-size: clamp(14px, 1.3vw, 18px);
  color: #cfd8bc;
  line-height: 1.5;
`