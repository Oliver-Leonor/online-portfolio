import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGitlab,
} from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+63-977-197-8604'>+63-977-197-8604</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:oliver.leonor90@gmail.com'>
            oliver.leonor90@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Tell me about it, I'll make it</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/Oliver-Leonor' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.linkedin.com/in/oliver-leonor-582706228/'
            target='_blank'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.instagram.com/lucienbarn/'
            target='_blank'
          >
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://gitlab.com/oliver.leonor90'
            target='_blank'
          >
            <AiFillGitlab size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
