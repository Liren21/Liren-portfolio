import React from 'react'
import {observer} from 'mobx-react-lite'
import './Job.scss'
import {Accordion, Button, Col, Row} from "react-bootstrap";

export default observer(() => {
    const jodData = [
        {
            title: 'Портфоли студента e-service',
            descr: 'Порфолио где студент может делать то и то',
            link: '',
            id: '1'
        },
        {
            title: 'Расписание для ОмГУ',
            descr: 'Порфолио где студент может делать то и то',
            link: '',
            id: '2'
        },
        {
            title: 'Приложение Хранилище:Займ, микрозаймы',
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
           <Accordion className={'custom-accordion'}>
               {
                   jodData.map((s) => (
                       <Row>
                           <Col md={10}>
                               <Accordion.Item eventKey={s.id}>
                                   <Accordion.Header>{s.title}</Accordion.Header>
                                   <Accordion.Body>
                                       {s.descr}
                                   </Accordion.Body>
                               </Accordion.Item>
                           </Col>
                           <Col md={2}>
                               <Button variant={"outline-light"} className={'btn-job'}>Посетить</Button>
                           </Col>
                       </Row>

                   ))
               }
           </Accordion>
       </>
    )
})
