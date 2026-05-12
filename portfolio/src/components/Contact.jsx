import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzRk-FyEAb_IzhjB4RZhpSLYGPz92iLcAVekrFpkroT8MnLjeSEbxMK8jit5hr82Xz87w/exec'

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' })
  const [status, setStatus] = React.useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      console.log(err)
    }
  }

  return (
    <Container id="contact">
      <ContentWrapper>

        <LeftBlock>
          <GetInTouch>
            <Title>Get in Touch</Title>

            <InfoRow>
              <FaEnvelope />
              <span>sujalstha801@gmail.com</span>
            </InfoRow>

            <InfoRow>
              <FaMapMarkerAlt />
              <span>Kathmandu, Nepal</span>
            </InfoRow>
          </GetInTouch>

          <Divider />

          <Socials>
            <Title>Socials</Title>

            <SocialIcons>
              <a href="https://linkedin.com/in/sujalshresthaa" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/sujal.shresthaaa" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://github.com/Sujal-Shrestha-SS" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </SocialIcons>
          </Socials>
        </LeftBlock>

        <RightBlock>
          <FormTitle>Contact Me</FormTitle>

          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>

          {status === 'sent' && <StatusMsg $success>Message sent successfully!</StatusMsg>}
          {status === 'error' && <StatusMsg>Please fill all fields and try again.</StatusMsg>}

          <SendMsgBtn onClick={handleSubmit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </SendMsgBtn>
        </RightBlock>

      </ContentWrapper>
    </Container>
  )
}

export default Contact


/* ─── Styled Components ───────────────────────────────────────────────────── */

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px clamp(5%, 7.5vw, 10%);
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: clamp(24px, 5vw, 80px);
  align-items: stretch;

  /* Stack vertically on mobile */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftBlock = styled.div`
  flex: 1;
  padding: clamp(24px, 3vw, 40px);
  background: #0f172a;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: white;
  min-width: 0;
`

const Title = styled.h2`
  font-size: clamp(18px, 2vw, 24px);
  margin-bottom: 18px;
`

const GetInTouch = styled.div``

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 12px 0;
  font-size: clamp(13px, 1.2vw, 15px);
  color: #cfd8dc;

  svg {
    font-size: 18px;
    color: #38bdf8;
    flex-shrink: 0;
  }
`

const Divider = styled.hr`
  margin: 28px 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`

const Socials = styled.div``

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.25s ease, transform 0.25s ease;
    display: inline-flex;
  }

  a:hover {
    color: #38bdf8;
    transform: translateY(-3px) scale(1.15);
  }
`

const RightBlock = styled.div`
  flex: 1.3;
  padding: clamp(24px, 3vw, 40px);
  background: #0f172a;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: white;
  display: flex;
  flex-direction: column;
  min-width: 0;
`

const FormTitle = styled.h2`
  font-size: clamp(18px, 2vw, 24px);
  margin-bottom: 28px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 13px;
  color: #94a3b8;
`

const Input = styled.input`
  padding: 11px 14px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  outline: none;
  background: #1e293b;
  color: white;
  font-size: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder { color: #475569; }

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
  }
`

const TextArea = styled.textarea`
  padding: 11px 14px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  outline: none;
  background: #1e293b;
  color: white;
  font-size: 14px;
  min-height: 130px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder { color: #475569; }

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
  }
`

const StatusMsg = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
  color: ${({ $success }) => ($success ? '#4ade80' : '#f87171')};
`

const SendMsgBtn = styled.button`
  margin-top: 10px;
  padding: 13px 28px;
  border: none;
  border-radius: 8px;
  background: #38bdf8;
  color: #0b1d3a;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
  transition: background 0.25s ease, transform 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: #0ea5e9;
    transform: translateY(-2px) scale(1.04);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`