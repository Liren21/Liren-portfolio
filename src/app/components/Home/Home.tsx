import './Home.scss'

import React from 'react'

import {observer} from 'mobx-react-lite'
import profile from '../../generic/img/profile.jpg'
import {Button} from "react-bootstrap";

export default observer(() => {
    const btnData = [
        {
            icon: <i className="fa fa-github" aria-hidden="true"/>,
            link: 'https://github.com/Liren21',
        },
        {
            icon: <i className="fa fa-vk" aria-hidden="true"/>,
            link: 'https://vk.com/liren21',
        },
        {
            icon: <i className="fa fa-telegram" aria-hidden="true"/>,
            link: 'https://t.me/Liren21',
        },
    ]
    return (
        <div style={{textAlign: 'center'}} className={'home'}>
            <img
                style={{borderRadius: '16px'}}
                width={'200px'}
                src={profile}/>
            <div>
                <p className={'home-title-name'}>Илья Куминов
                    <br/>frontend-developer</p>
                {
                    btnData.map((s) => (
                        <Button variant={"outline-light"}>
                            {s.icon}
                        </Button>
                    ))
                }
            </div>
        </div>
    )
})
