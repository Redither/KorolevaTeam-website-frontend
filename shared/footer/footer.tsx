import { Container } from "@mui/material"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Footer = () => {

    return(
        <footer>
            <Container>
                <h2>Обратная связь</h2>
                <form action="">
                    <h3>Остались вопросы?</h3>
                    <p>Оставьте свои контактные данные, и мы свяжемся с вами</p>
                    <label htmlFor="name">
                        <span>Ваше имя</span>
                        <input type="text" id="name"/>
                    </label>
                    <label htmlFor="phone">
                        <span>Ваш телефон</span>
                        <input type="text" name="phone" id="phone" />
                    </label>
                    <label htmlFor="email">
                        <span>Ваш телефон</span>
                        <input type="text" name="email" id="email" />
                    </label>
                    <label htmlFor="message">
                        <span>Текст сообщения</span>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </label>
                    <button>Отправить</button>
                </form>
            </Container>
            <Container>
                <h2>Контакты</h2>
                <Row>
                    <Col>
                        
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}