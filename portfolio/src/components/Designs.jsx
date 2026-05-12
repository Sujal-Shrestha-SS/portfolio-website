import React from 'react'
import styled from 'styled-components'
import designs from '../data/designsData'

const Designs = () => {
  return (
    <Container id="design">
      <Title>Passion Projects</Title>

      <SubTitle>"A football fan's creative outlet - casual Photoshop designs made purely for the love of the game."</SubTitle>

      <DesignWrapper>
        {designs.map((design, index) => (
          <DesignBlock key={index}>
            <DesignImage src={design.image} alt={design.title} />
          </DesignBlock>
        ))}
      </DesignWrapper>
    </Container>
  )
}

export default Designs


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px clamp(5%, 8vw, 12%);
`

const Title = styled.h1`
  font-size: clamp(28px, 3.5vw, 42px);
  margin-bottom: clamp(36px, 5vw, 60px);
  text-align: center;
`

const SubTitle = styled.p`
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

const DesignWrapper = styled.div`
  width: 100%;
  max-width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(20px, 3vw, 40px);

  /* Single column on mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const DesignBlock = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5; /* same card size */
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  }
`

const DesignImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* fills card without stretching */
  display: block;
  transition: transform 0.4s ease;

  ${DesignBlock}:hover & {
    transform: scale(1.08);
  }
`