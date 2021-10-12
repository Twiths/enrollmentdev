import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from "../../public/images/edu.png";

function DemoCarouse(){
const arr = [1, 2, 3];

        return (
            <>
            <h4 className="carsouel__header" style={{textAlign: 'center',marginTop:'50px'}}>What Our Alumni Say</h4>
            <Carousel
              autoPlay={true} 
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              >
              {arr.map((_, index) => (
                  // '_' when mapping means we are ignoring the parameter
                <div className="carsouel__container" key={index}>
                <div>

                    <Image src={logo} className='imgj' height='150px' width='150px' alt=""/>
                    <h3>Prisca</h3>
                </div>
                    
                <div className='carsouel__wrapper'>
                    <div className='carsouel__text__wrapper'>
                    <p>Outbox Edu enabled me discover  my strength in programming andbuilt my carrer as a software developer too.</p>
                    </div>
                </div>
                </div>
              ))}
            </Carousel>
            </>
        );
    }


    export default DemoCarouse