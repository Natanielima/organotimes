import { ReactElement } from 'react'
import './Botao.css'

import React from 'react';

interface BotaoProps{
    children:ReactElement
}

const Botao = (props: BotaoProps)=>{
    return(
        <button className='Botao'>
            {props.children}
        </button>
    )
}
export default Botao