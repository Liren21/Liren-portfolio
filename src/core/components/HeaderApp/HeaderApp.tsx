// eslint-disable-next-line prettier/prettier
import * as React from 'react'
import {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import headerStore from '../../lib/store/header-app'
import './HeaderApp.scss'
import {handlerError} from '../../lib/api/common'
import {Button} from "react-bootstrap";
import routes from "../../../app/lib/routes";


const HeaderApp = observer(() => {
    useEffect(() => {
        headerStore.checkAuthorized().catch(handlerError)
    }, [])

    return (
        <div className={'header-app'}>
            <div className={'box-item-logo'}>И.К</div>

            <Button style={{width:'100%'}} href={'#' + routes.HOME} variant={"outline-light"}><i className="fa fa-home" aria-hidden="true"/>Главная
            </Button>
            <Button style={{width:'100%'}} href={'#' + routes.JOB} variant={"outline-light"}><i className="fa fa-briefcase"
                                                                         aria-hidden="true"/> Работы </Button>
            <Button style={{width:'100%'}} href={'#' + routes.EDUCATION} variant={"outline-light"}><i className="fa fa-graduation-cap"
                                                                               aria-hidden="true"/> Образование</Button>
        </div>
    )
})

export default HeaderApp
