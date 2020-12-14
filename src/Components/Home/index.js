import React from 'react'
import logo from '../../Images/logo-modclima.jpg'
import {MainContainer, MainTitle, TopicTitles} from './style'
import dayjs from 'dayjs'

const Home = () => {
    require('dayjs/locale/pt-br')
    dayjs.locale('pt-br')
    const today = dayjs()

    return (
        <MainContainer>
            <img src={logo} alt="logo" width="20%"/>
            <MainTitle>
                CURITIBA, {today.format("DD [de] MMMM [de] YYYY").toUpperCase()}<br/>
                RELATÓRIO DE PREVISÕES E OBSERVAÇÕES METEOROLÓGICAS
            </MainTitle>
            <TopicTitles>
                Análise das Previsões Meteorológicas (12:00Z):
            </TopicTitles>

        </MainContainer>
    )
}

export default Home