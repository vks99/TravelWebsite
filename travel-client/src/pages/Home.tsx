import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
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
        <div className='container my-5 '>
        <div className='row g-3'>
            <div className='col-md-6 col-lg-4'>
                <div className='card'>
                    <img src="/image1.jpeg" className='card-img-right' alt='backgroung image'></img>
                        <div className='card-body'>
                            <h2 className='card-title'>India</h2>
                            <p className='card-text cardcontent '>
                            The natural beauty of India captivates everyone. There are many rivers like Ganga,
                             Jamuna, Brahmaputra etc. to enhance the natural beauty in the country of India, which add to the natural beauty.
                             The country also has many waterfalls, snowy places which add to the natural beauty even more.
                            </p>
                            <a href='/Destination' className='btn btn-primary'>View More</a>
                        </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4'>
                <div className='card'>
                    <img src="/image2.jpeg" className='card-img-right' alt='backgroung image'></img>
                        <div className='card-body'>
                            <h2 className='card-title'>Canada</h2>
                            <p className='card-text cardcontent'>
                            Canada is famous for its picturesque landscapes during autumn and, of course, Ontario is no exception. 
                            The rich foliage and stunning scenery of Ontario's oldest park, 
                            Algonquin Park, makes it a top spot to enjoy the beauty of autumn as it boasts 7,725 square kilometres of forests.
                            </p>
                            <a href='/Destination' className='btn btn-primary'>View More</a>
                        </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4'>
                <div className='card'>
                    <img src="/image3.jpeg" className='card-img-right' alt='backgroung image'></img>
                        <div className='card-body'>
                            <h2 className='card-title'>Switzerland</h2>
                            <p className='card-text cardcontent'>
                            The astonishing ecological excellence of the magnificent Alps, the tranquility of lakes, cosmopolitan urban communities,
                             and transcending castles – 
                            that is only some of what Switzerland brings to the table. Add to it some shopping, wine savoring, luscious chocolates, too!
                            </p>
                            <a href='/Destination' className='btn btn-primary'>View More</a>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div>
            <div className="row mx-5 g-3">
                <div className='header-travelguide'>
                    <h2>Travel Guides</h2>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                        {/* <img className='card-image-travelguide' src='./sarada_img.jpg'>

                        </img> */}
                        <img className="rounded-circle card-image-travelguide" alt='image-travelguide' src='./sarada_img.jpg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                          <h2>Sarada Maddipatla</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                    <img className="rounded-circle card-image-travelguide" alt='image-travelguide' src='./sarada_img.jpg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                          <h2>Vikas Uppala</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card">
                    <img className="rounded-circle card-image-travelguide" alt='image-travelguide' src='./sarada_img.jpg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                           <h2>Sethu Madhav</h2> 
                        </div>
                    </div>
                </div>
                <div className="col -3">
                    <div className="card">
                    <img className="rounded-circle card-image-travelguide" alt='image-travelguide' src='./sarada_img.jpg' />
                        <div className="card-text-travelguide d-flex justify-content-center">
                             <h2>Su zhang</h2>   
                        </div>
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