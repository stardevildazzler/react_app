import { Container} from 'react-bootstrap';
import logo from "../Uploadfiles/image/Blue Corporate Photo Simple Modern Resume.jpg"


function Myprofile() {
    
    return (
      <>
      <Container className="my-2">
        <h1 className='resume'>RESUME</h1>
          <div className="myprofile">
            
              <img src={logo} alt='logo3'></img>

          </div>

      </Container>
      </>
    );
  }
  
  export default Myprofile;