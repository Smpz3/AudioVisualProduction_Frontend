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
const Line = styled.div`
  width: 20%;
  height: 2px;
  background-color: pink;
  margin: 20px 0;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-top: 20px;
  color: var(--secondaryColor); 
  display: flex; 
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
                    <Text>We are the brightside productions. Started in 2021. </Text>
                </div>
                <Line/>
                <div>
                    <Image src={image2URL} alt="Image 2" />
                    <Text>Our mission is to educate thorugh media in all forms. </Text>
                </div>
            </ImageContainer>
            <div>
                <Image src={image3URL} alt="Image 3" />
                <Text>We bridge the gap between evidence based mental health research and the public through media distribution.</Text>
            </div>
            <div>
                <Image src={image4URL} alt="Image 4" />
                <Text>More info here </Text>
            </div>
            
        </Container>
    );
};

export default Home;