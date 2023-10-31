import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/project-1.webp'
import timer from '../../../assets/images/project-2.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'spa',
        status: 'spa'
    },
]

const worksData = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: socialImg,
        type: 'spa'
    }, {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: timer,
        type: 'react'
    }
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredWorks = worksData

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(work => work.type === 'landing')
    } else if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work => work.type === 'react')
    } else if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {filteredWorks.map(
                        (w, index) => {
                            return (
                                <Work title={w.title} key={index}
                                      text={w.text}
                                      src={w.src}/>
                            )
                        })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};