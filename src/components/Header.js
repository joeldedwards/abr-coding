import React from 'react'
import '../styles/Header.css';
import logo from '../images/logo.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faClapperboardPlay,
    faArrowRightToBracket 
} from '@fortawesome/pro-solid-svg-icons'

library.add(faClapperboardPlay, faArrowRightToBracket);

function Header() {
  return (
    <header className="App-header">
        <Container>
            <Row>
                <Col className='header-col-left'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        Movie Hub
                    </h1>
                </Col>
                <Col className='header-col-right'>
                    <Button>
                        <FontAwesomeIcon className='active' icon="clapperboard-play" />
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon="arrow-right-to-bracket" />
                    </Button>
                </Col>
            </Row>
        </Container>
    </header>
  )
}

export default Header