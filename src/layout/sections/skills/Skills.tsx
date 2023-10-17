import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

type SkillPropsType = {}

export const Skills = () => {
    return (
        <StyledSkill>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'code'}
                       title={'html5'}
                       decription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill iconId={'css'}
                       title={'css3'}
                       decription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill iconId={'react'}
                       title={'React'}
                       decription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill iconId={'typeScript'}
                       title={'typescript'}
                       decription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill iconId={'styledComponents'}
                       title={'styled components'}
                       decription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill iconId={'figma'}
                       title={'WEB DESIgN'}
                       decription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div<SkillPropsType>`
  background-color: #ffe5e4;
  min-height: 100vh;
`
