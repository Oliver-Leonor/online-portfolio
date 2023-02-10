import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've familiarized myself with most technolgies for web development to
      fulfill my role as a technical interviewer.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js and Redux.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js, MongoDB and Firebase
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListTitle>Administrative Work</ListTitle>
        <ListParagraph>
          Experience with <br />
          Zendesk, Calendly, Slack and other administrative tools.
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
