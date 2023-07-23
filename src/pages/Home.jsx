import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;; 
  margin-top: 10px; 
  height: 100%; 
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  border-top: 2px solid pink;
 margin-top: 30px; 
  
`;


const Image = styled.img`
  width: 200px;
  height: 190px;
  margin: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  color: var(--secondaryColor);
  text-align: center;

`;


const Title = styled.h3`
  font-size: 24px;
  margin-top: 20px;
  color: var(--secondaryColor); 
  display: flex; 
`;
const ImageRcontainer = styled.div` 
display: flex; 
justify-content:flex-end; 
width: 100%; 

`; 


const image1URL = "https://media.licdn.com/dms/image/D4E03AQFQ_O2xZmohLw/profile-displayphoto-shrink_200_200/0/1673061580437?e=1695254400&v=beta&t=vIxS8L68XYG0ueY7HA-h68EOiR25JMVEnU5wpSYmhcM";
const image2URL = "https://drive.google.com/uc?id=1oX6Xa46YMzWfwRWYUToFZJc5SH_7OO3n";
const image3URL = "https://drive.google.com/uc?id=1F7yj6K5Vhx5xEbmkjoUgHxGAp-HVkU5W ";
const image4URL = "https://drive.google.com/uc?id=1q3J0ksBMjzBLvjHnB4XTKdtsj-qLxV14 ";

const Home = () => {
    

    return (
        <Container>
            <Title> <h3> Welcome! Learn more about us here:</h3>
            </Title>
            
            <ImageContainer>
                <div>
                    <Image src={image1URL} alt="Image 1" />
            <Text>The Brightside Productions LLC is a multidisciplinary production company and research institute created in order to incorporate the application of evidence-based research and social work practices within the creative field through music, animation, television, film, and other mediums.  </Text>
                </div>
                
          <div>
            <ImageRcontainer>
              <Image src={image2URL} alt="Image 2" />
            </ImageRcontainer>
            <Text>The primary objective of The Brightside Productions LLC is to create a global social impact so that all individuals can live healthier, happier, and more knowledgeable lives. Children ages 8-12 years-old in the United States spend an average of 4 to 6 hours per day staring at a screen while teenagers strikingly spend up to 9 hours a day on screen time.  </Text>
                </div>
            </ImageContainer>
            <div>
                <Image src={image3URL} alt="Image 3" />
          <Text>While the negative effects of such extensive screen time warrant a separate and lengthy discussion - we have an opportunity to articulate and demonstrate critical narratives for childhood and adulthood development through this identified branch of communication. Thus, we aspire to create an objective way to accomplish these goals through the creation of an animated television series centered around evidence-based research and social work practices.</Text>
            </div>
        <div>
          <ImageRcontainer>
            <Image src={image4URL} alt="Image 4" />
          </ImageRcontainer>
          <Text>Areas of interest for the television series will include interpersonal communication skills, trauma and resilience informed approaches, mastery of environment through systems theory, mental health disorders and wellness, and general psychology principles. Influencing social change requires a deep understanding of the problems facing society and steadfastness to overcome them which led to the creation of our advisory panel/editorial board </Text>
            </div>
            
        </Container>
    );
};

export default Home;