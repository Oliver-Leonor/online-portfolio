import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm <br />
        Oliver Leonor
      </SectionTitle>
      <SectionText>
        I am a a highly motivated and experienced professional with over 10
        years in customer service, sales, and human resources. I usually work
        with React.js and Redux.js for frontend and Node.js, MongoDB, and
        Firebase for backend.
      </SectionText>
      <Button
        onClick={() => (window.location = 'mailto:oliver.leonor90@gmail.com')}
      >
        Contact Me!
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
