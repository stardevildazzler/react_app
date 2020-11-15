import { Container, Form, Button } from 'react-bootstrap';



function Adminpanal(props) {

    return (
        <>
            <Container className="my-2">
                
                <div className="myprofile_admin">
                <h1 className='resume'>Admin Panale</h1>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" />

                        </Form.Group>

                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Author" />

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Text</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>


                </div>

            </Container>
        </>
    );
}

export default Adminpanal;