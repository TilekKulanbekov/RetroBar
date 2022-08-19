import React from 'react'
import '../../styles/Footer.scss'
import { InstagramIcon, VectorSearch, TelegramIcon, YoutubeIcon, LogoRetroIcon } from '../../assets/Icons'
import { Box } from '@mui/material'

function Footer() {
  
  return (
    <div className='footerContainer'>
      <div className='footerContainerInner'>
        <Box className='footerPoliticConfidentual'  style={{display:'flex', flexDirection:'column' }}>
          <img src={LogoRetroIcon} alt="logo" />
          <div className='footerPoliticConfidentualInner'>
            <p className='politConf'>Политика конфиденциальности </p>
            <span>
              <p>
                Copyright © 2021
              </p>
              <p>
                Digital-агентство «Active Trust»
              </p>
            </span>
          </div>
        </Box>
        <Box className='footerNavigation' style={{display:'flex' , height:'100%'}}>
          <ul>
            <li>
              Фото
            </li>
            <li>
              Новости
            </li>
            <li>
              Видео
            </li>
            <li>
              Контакты
            </li>
          </ul>
          <ul>
            <li>
              Заведения
            </li>
            <li>
              Сотрудники
            </li>
            <li>
              События
            </li>
            <li>
              Контакты
            </li>
          </ul>
        </Box>
        <Box className='footerSocial' style={{display:'flex' , height:'100%'}}>
            <div className='searchBlock'>
              <div className='searchCont'>
                <input type='text' placeholder='Геолокация|' className='footerSearchInput' />
                <button className='footerSearchBtn'><img src={VectorSearch} alt='search' /></button>
              </div>
            </div>
            <div className='footerInfo'>
              <p>Мы в социальных сетях:</p>
              <div className='footerInfoIconsBlock'>
                <img src={TelegramIcon} alt="telegram" />
                <img src={InstagramIcon} alt="Instagram" />
                <img src={YoutubeIcon} alt="Youtube" />
              </div>
            </div>
            
        </Box>
        <div className='footerPoliticConfidentualInnerSecond'>
          <p className='politConf'>Политика конфиденциальности </p>
          <span>
            <p>
              Copyright © 2021
            </p>
            <p>
              Digital-агентство «Active Trust»
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer