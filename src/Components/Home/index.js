import React from 'react'
import logo from '../../Images/logo-modclima.jpg'
import {MainContainer, MainTitle, TopicTitles, Subtitles} from './style'
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
            <Subtitles>
                De acordo com as fontes de informações meteorológicas do aeroporto do Bacacheri (TAF, Terminal
                Aerodrome Forecast), imagens de satélite e modelos de previsão atmosférica.
                <br/>Fontes: https://www.redemet.aer.mil.br, https://www.cptec.inpe.br, www.simepar.br,
                https://www.meteoblue.com, https://windy.com.
            </Subtitles>

        </MainContainer>
    )
}

export default Home