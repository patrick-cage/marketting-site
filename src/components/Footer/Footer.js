import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterLinksItems, FooterLink, FooterSubHeading, Form, FormInput, FooterSubText, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, SocialMediaWrap,SocialMedia, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from './Footer.elements';

const Footer = () => {
    return ( 
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                   Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can Unsubscribe at any time.</FooterSubText>
             <Form>
                 <FormInput name="email" type="email" placeholder="Your Email"/>
                     <Button fontBig>Subscribe</Button>
             </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponserships</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>                        
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/sign-up">Submit video</FooterLink>
                        <FooterLink to="/">Ambassadors</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencer</FooterLink>
                        <FooterLink to="/"></FooterLink>
                        <FooterLink to="/"></FooterLink>
                        <FooterLink to="/"></FooterLink>
                        
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                        <FooterLink to="/">WhatsApp</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>Made by <a href="https://www.linkedin.com/in/patrick-ngure/" >Patrick </a>Using Create React App | ULTRA © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href={'https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A'} target="_blank" aria-label="YouTube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
