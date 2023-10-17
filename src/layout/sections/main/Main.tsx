import React from 'react';
import photo from '../../../../src/assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Trandin Ivan</Name>
                    <MainTitle>A Frontend Developer</MainTitle>
                </div>
                <Photo src={photo} alt='Фото Ивана'/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
  background-color: #fff5e7;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h1`
`