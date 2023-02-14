import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
<<<<<<< HEAD
=======


>>>>>>> df398aceff2fe50807bfa15ae04bc4fbdfef2df3
type Props = {
    name : string;
    email: string;
    feedback: string;
}

const Home=()=>{
    const [feed, setFeed] = useState(false);
    const [feedback, setFeedback] = useState<Props[]>([]);
    const sendFeedPostRequest = async () => {
        try{
           const response = await axios.post(
            'http://localhost:8000/home', feedback
           );
           console.log(feedback);
           console.log(response.data);
        }catch (err){
            console.log(err);
        }
    };
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFeedback({...feedback, [e.target.name]: e.target.value});
    }
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
                <h3>Travel To Explore</h3>
                <p>All journeys are different, just find what makes it unique!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="/background_image_fort.jpeg"
                alt="Third slide"
                />
            <Carousel.Caption>
                <h3>Adventure</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        <div className='row text-center mt-5'>
            <h2>Popular Destinations</h2>
        </div>
        
        
            <div className='container mb-5'>
                 <div className="card-deck">
                    <div className="card">
                        <img src="/image1.jpeg" className="card-img-top" alt="Card Image"/>
                        <div className="card-body">
                        <h3 className="card-title">India</h3>
                        <p className="card-text">The natural beauty of India captivates everyone. There are many rivers like Ganga,
                                            Jamuna, Brahmaputra etc. to enhance the natural beauty in the country of India.</p>
                            <div className='btn mb-2'>
                            <a href="/Destination" className="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/image2.jpeg" className="card-img-top" alt="Card Image"/>
                        <div className="card-body">
                        <h3 className="card-title">Canada</h3>
                        <p className="card-text">Canada is famous for its picturesque landscapes during autumn. 
                                                    The stunning scenery of 
                                                    Algonquin Park, makes it a top spot to enjoy the beauty of autumn.</p>
                            <div className='btn mb-2'>
                            <a href="/Destination" className="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/image3.jpeg" className="card-img-top" alt="Card Image"/>
                        <div className="card-body">
                            <h3 className="card-title">SwitzerLand</h3>
                            <p className="card-text">The astonishing ecological excellence of the magnificent Alps, the tranquility of lakes, cosmopolitan urban communities,
                                                    and transcending castles.</p>
                            <div className='btn mb-2'>
                            <a href="/Destination" className="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
           </div>



            <div className="row mx-5 g-3">
                <div className='header-travelguide'>
                    <h2>Travel Guides</h2>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        <img className="rounded-circle card-image-travelguide " alt='image-travelguide' src='./sarada_img.jpg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                          <h4>Sarada Maddipatla</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                    <img className="rounded-circle card-image-travelguide" alt='image-travelguide' src='vikas_image1.jpg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                          <h4>Vikas Uppala</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                    <img className="rounded-circle card-image-travelguide" alt='image-travelguide' src='sethu_madhav_image1.jpg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                           <h4>Sethu Madhav</h4> 
                        </div>
                    </div>
                </div>
                <div className="col -3">
                    <div className="card">
                    <img className="rounded-circle card-image-travelguide" alt='image-travelguide' src='suzhang.jpeg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                             <h4>Su zhang</h4>   
                        </div>
                    </div>
                </div>
            </div>
        
        <div className='container'>
                <div className="row mt-5">
                     <h3 className='d-flex justify-content-center'>If you are a savvy traveler, there is nothing better than sharing your personal experience.</h3><br/>
                </div>
                  <div className="d-flex justify-content-center mb-5">
                    {!feed && ( <button className='btn btn-danger d-flex justify-content-center' onClick={() => setFeed((value) => !value)}> Provide Feedback</button>)}
                </div>
                    <div className='feedback d-flex justify-content-center'>
                        {feed && (
                        <form onSubmit={sendFeedPostRequest}>                           
                                <div className='my-1'>
                                    <input placeholder='Enter Name' name='name' onChange={handleChange} required/>
                                </div>
                                <div >
                                    <input placeholder='Enter Email' name='email' onChange={handleChange} required/>
                                </div>
                                <div className='my-1'>
                                    <input placeholder='Enter Feedback' name='feedback' onChange={handleChange} required/>
                                </div>
                                <button type='submit' className='btn btn-success mb-5'>Submit feedback</button>
                                <button className='btn btn-danger mb-5' onClick={() => setFeed((value) => !value)}>Close</button>
                        </form>
                        )}
                    </div>
                          
        </div>
     </div> 
        
        
    )
}

export default Home;