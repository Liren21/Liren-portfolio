import React from 'react'
import {observer} from 'mobx-react-lite'
import './Job.scss'
import { Alert, Button, Card,} from "react-bootstrap";

export default observer(() => {
    const jodData = [
        {
            title: 'Портфоли студента eservice',
            descr: 'Порфолио где студент может делать то и то',
            link: '',
            id: '1'
        },
        {
            title: 'Расписание для ОмГУ ',
            descr: 'Порфолио где студент может делать то и то',
            link: '',
            id: '2'
        },
        {
            title: 'Хранилище:Займ, микрозаймы',
            descr: 'Порфолио где студент может делать то и то',
            link: '',
            id: '3'
        },
    ]
    return (

        <>
            <Alert variant={'success'}>
                В данных работах делался только Frontend.
            </Alert>
            <div className={'job-body'}>
                {
                    jodData.map((s) => (

                        <Card className={'job-card'} style={{width: '18rem'}}>
                            <Card.Title>{s.title}</Card.Title>
                            <Card.Body>

                                <div className={'job-btn'}>
                                    <Button variant={"light"} className={'job-btn-item'}>
                                        Подробнее
                                    </Button>
                                    <Button  variant={"light"} className={'job-btn-item'}>
                                        перейти
                                    </Button>
                                </div>

                            </Card.Body>
                        </Card>

                    ))
                }
            </div>
        </>
    )
})
