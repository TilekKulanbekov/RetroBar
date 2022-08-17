import React from 'react'
import '../../styles/Footer.scss'
import logo from '../../assets/retro-bar-logo.png'
import {Box} from '@mui/material'
function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerContainerInner'>
        <Box  style={{display:'flex', flexDirection:'column' ,width: '25%'}}>
          <img style={{objectFit:'cover', width:'10rem'}} src={logo} alt="logo" />
          <div className='footerPoliticConfidentual'>
            <p>Политика конфиденциальности </p>
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
        <Box className='footerNavigation' style={{display:'flex' ,width: '25%', height:'100%'}}>
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
      </div>
    </div>
  )
}

export default Footer