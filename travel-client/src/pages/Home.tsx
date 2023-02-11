import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Home=()=>{
    const [feed, setFeed] = useState(false);
    return(
        <div>
           <Carousel className='my-5'>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="/background_image_fort3.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>Welcome!</h1>
                <a href='/Login' className='btn btn-primary'>Login</a>
                <a href='/Signup' className='btn btn-primary ml-2'>Signup</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="/background_image_city.jpeg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="/background_image_fort.jpeg"
                alt="Third slide"
                />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        <div className='row text-center mt-5'>
            <h2>Popular Destinations</h2>
        </div>
        <div className='container my-5 '>
        <div className='row'>
            <div className='col-4'>
                <div className='card'>
                    <img src="/image1.jpeg" className='card-img-right' alt='backgroung image'></img>
                        <div className='card-body'>
                            <h2 className='card-title'>Enjoy your dream holidays</h2>
                            <p className='card-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem modi nihil sint numquam fugiat ea quis ut architecto error impedit pariatur aliquam nesciunt harum natus suscipit laborum voluptates provident.
                            </p>
                            <a href='/Destination' className='btn btn-primary'>View More</a>
                        </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='card'>
                    <img src="/image2.jpeg" className='card-img-right' alt='backgroung image'></img>
                        <div className='card-body'>
                            <h2 className='card-title'>Enjoy your dream holidays</h2>
                            <p className='card-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem modi nihil sint numquam fugiat ea quis ut architecto error impedit pariatur aliquam nesciunt harum natus suscipit laborum voluptates provident.
                            </p>
                            <a href='/Destination' className='btn btn-primary'>View More</a>
                        </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='card'>
                    <img src="/image3.jpeg" className='card-img-right' alt='backgroung image'></img>
                        <div className='card-body'>
                            <h2 className='card-title'>Enjoy your dream holidays</h2>
                            <p className='card-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem modi nihil sint numquam fugiat ea quis ut architecto error impedit pariatur aliquam nesciunt harum natus suscipit laborum voluptates provident.
                            </p>
                            <a href='/Destination' className='btn btn-primary'>View More</a>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div className='container'>
                <div className="row ">
                     <h1 className='d-flex justify-content-center'>Feedback Form</h1><br/>
                </div>
                  <div className="d-flex justify-content-center mb-5">
                    {!feed && ( <button className='btn btn-danger d-flex justify-content-center' onClick={() => setFeed((value) => !value)}> Provide Feedback</button>)}
                </div>
                    <div className='feedback d-flex justify-content-center'>
                        {feed && (
                        <form >                           
                                <div className='my-1'>
                                    <input placeholder='Enter Name' name='name'/>
                                </div>
                                <div >
                                    <input placeholder='Enter Email' name='email'/>
                                </div>
                                <div className='my-1'>
                                    <input placeholder='Enter Feedback' name='feedback'/>
                                </div>
                                <button className='btn btn-success mb-5'>Submit feedback</button>
                                <button className='btn btn-danger mb-5' onClick={() => setFeed((value) => !value)}>Close</button>
                        </form>
                        )}
                    </div>
                          
        </div>
     </div> 
        
        
    )
}

export default Home;