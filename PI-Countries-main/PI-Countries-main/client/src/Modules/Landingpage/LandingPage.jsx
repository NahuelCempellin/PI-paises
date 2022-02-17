import { Button } from '../../styles/Buttons/Button2';
import { LandingContainer, H1} from '../../styles/LandingPage/LandingPage';
import {Link} from 'react-router-dom';
export default function LandingPage(){
    return(
         <LandingContainer>
        <H1>
        <h1 className='text'>THE COUNTRY PAGE</h1>
        </H1>
        
            <Link to={'/Countries'}>
            <Button className='fancy' >
  <span className="top-key"></span>
  <span className="text">HOME</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
        </Button>
        </Link>
    </LandingContainer>
    
    
    )
}