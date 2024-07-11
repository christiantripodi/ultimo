import { Component } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";


class Home extends Component {

    fetchHome = () => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then((resp) => {
            if(resp.ok){
                return resp.json
            }else{
                throw new Error('errore chiamata')
            }
        })
        .then(data => {
            console.log('Risposta json', data)
        })
        .catch((e) => {
            console.log('errore', e)

    })
    }

    componentDidMount() {
            this.fetchHome()
        }



    render() {

        return(
            <div>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} md={6} xl={4}>
                        
                        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    
                        
                        </Col>
                    </Row>
                </Container>
            </div>
       
        
        )

}




}

export default Home