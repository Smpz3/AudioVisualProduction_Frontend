import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H2 = styled.h2`
colorcolor: var(--secondaryColor);
`; 
const StyledP = styled.p`
color: var(--textColor); 
width: 300px; 
height: 170px; 
padding: 10px; 
`;

const PictureInput = styled.input`
  margin-bottom: 10px;
`;

const SocialMediaInput = styled.input`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  margin-bottom: 10px;
`;

const SocialMediaLink = styled.a`
  margin-bottom: 20px;
`;

const Home = () => {
    const [picture1, setPicture1] = useState('/Users/sofia/Documents/AudioVisualProduction_folder/audio_visual_production/src/images/Richards_Copy.png');
    const [picture2, setPicture2] = useState('');
    const [picture3, setPicture3] = useState('');
    const [socialMediaLink1, setSocialMediaLink1] = useState('https://www.instagram.com/thebrightsideproductionsllc/?hl=es');
    const [socialMediaLink2, setSocialMediaLink2] = useState('');
    const [socialMediaLink3, setSocialMediaLink3] = useState('');

    return (
        <Container>
            <h1>Welcome!</h1>
            <H2>About us:</H2>
            <StyledP>This is the company info. like when it started etc. Our research mission. what services we provide. just want to know how far out this goes really </StyledP>
            <PictureInput
                type="text"
                placeholder="Picture URL 1"
                value={picture1}
                onChange={(e) => setPicture1(e.target.value)}
            />
            <SocialMediaInput
                type="text"
                placeholder="Instagram"
                value={socialMediaLink1}
                onChange={(e) => setSocialMediaLink1(e.target.value)}
            />
            {picture1 && (
                <div>
                    <Image src={picture1} alt="Picture 1" />
                    <SocialMediaLink href={socialMediaLink1} target="_blank" rel="noopener noreferrer">
                        Social Media Link 1
                    </SocialMediaLink>
                </div>
            )}

            <PictureInput
                type="text"
                placeholder="Picture URL 2"
                value={picture2}
                onChange={(e) => setPicture2(e.target.value)}
            />
            <SocialMediaInput
                type="text"
                placeholder="Social Media Link 2"
                value={socialMediaLink2}
                onChange={(e) => setSocialMediaLink2(e.target.value)}
            />
            {picture2 && (
                <div>
                    <Image src={picture2} alt="Picture 2" />
                    <SocialMediaLink href={socialMediaLink2} target="_blank" rel="noopener noreferrer">
                        Social Media Link 2
                    </SocialMediaLink>
                </div>
            )}

            <PictureInput
                type="text"
                placeholder="Picture URL 3"
                value={picture3}
                onChange={(e) => setPicture3(e.target.value)}
            />
            <SocialMediaInput
                type="text"
                placeholder="Social Media Link 3"
                value={socialMediaLink3}
                onChange={(e) => setSocialMediaLink3(e.target.value)}
            />
            {picture3 && (
                <div>
                    <Image src={picture3} alt="Picture 3" />
                    <SocialMediaLink href={socialMediaLink3} target="_blank" rel="noopener noreferrer">
                        Social Media Link 3
                    </SocialMediaLink>
                </div>
            )}
        </Container>
    );
};

export default Home;
