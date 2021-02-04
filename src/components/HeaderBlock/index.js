// Начиная с 17 версии можно не импортировать в каждом файле
import React from 'react';

import s from './style.module.css';
import evee from '../../assets/eevee.png';
import {ReactComponent as ReactLogo} from "../../assets/logo.svg";

//const HeaderBlock = (props) => {
const HeaderBlock = ({title, hideBg = false,desc}) => {
    const styleBgContainer = hideBg ? {background: 'none'} : {}
    return (
        <div className={s.bg_container} style={styleBgContainer}>
            <div>
                {/*{title ? (*/}
                {/*    <h1 className={s.title}>*/}
                {/*        /!*props.title*!/*/}
                {/*        {title}*/}
                {/*    </h1>*/}
                {/*) : null}}*/}
                {/*ИЛИ*/}
                {
                    title && (
                        <h1 className={s.title}>
                            {title}
                        </h1>
                    )
                }

                <img src={evee} alt="" />
                {desc && (<p>{desc}</p>)}
                <ReactLogo />
            </div>
        </div>
    )
}

export default HeaderBlock;