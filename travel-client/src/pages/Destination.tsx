import { NavLink } from 'react-router-dom';
import '../App.css';

const Destination=()=>{
    return(
        <div>
        <div className='container-fluid position-relative p-0'>
            <div className='container-fluid bg-success py-5 mb-5 hero-header'>
                <div className='row justify-content-center py-5'>
                    <div className='col-lg-10 pt-lg-5 mt-lg-5 text-center'>
                        <h1 className='display-3 text-white mb-3'>Enjoy Your vacation With Us</h1>
                         <p className='f5-4 text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam laborum fuga cum repudiandae, maxime commodi quam! Porro, repudiandae. Tenetur et cum quo praesentium dolorem accusantium adipisci reprehenderit earum natus!</p>
                        <div className='position-relative w-75 mx-auto '>
                            <input type='text' className='form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5' placeholder='Eg:London' />
                            <button type='button' className='btn btn-success rounded-pill position-absolute top-0 end-0 me-2 my-1 d-flex align-items-center' style={{height:30}}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className='container-xxl py-5'>
            <div className="container">
                <div className='row g-5'>
                    <div className='col-lg-6' style={{minHeight:400}}>
                    <div className="position-relative">
                        <img src="./image2.jpeg" style={{objectFit:'cover'}}/>
                    </div>
                    </div>

                    <div className='col-lg-6'>
                        <h6 className='section-title bg-white text-start text-success pe-3'>About Us</h6>
                        <h1 className='mb-4'>Welcome to<span className='text-success'> Tourist</span></h1>

                        <p className='mb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam animi dignissimos dicta, eveniet hic voluptatum. Necessitatibus, perferendis repellat. Alias earum recusandae magni, mollitia eum incidunt dolore similique harum adipisci.
                        </p>
                        {/* <p className='mb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam animi dignissimos dicta, eveniet hic voluptatum. Necessitatibus, perferendis repellat. Alias earum recusandae magni, mollitia eum incidunt dolore similique harum adipisci.
                        </p> */}

                        <div className='row gy-2 gx-4 mb-4'>
                            <div className='col-sm-6'>
                                <p className='mb-0'><i className='fa fa-arrow-right text-success me-2'></i>First Class Flights</p>
                                <p className='mb-0'><i className='fa fa-arrow-right text-success me-2'></i>5 Star Accommodation</p>
                                <p className='mb-0'><i className='fa fa-arrow-right text-success me-2'></i>Premium City Tours</p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='mb-0'><i className='fa fa-arrow-right text-success me-2'></i>Handpicked Hotels</p>
                                <p className='mb-0'><i className='fa fa-arrow-right text-success me-2'></i>Latest Model Vehicles</p>
                                <p className='mb-0'><i className='fa fa-arrow-right text-success me-2'></i>Service</p>
                            </div>
                        </div>
                        <div className='btn btn-success py-3 px-5 mt-2'>Read More</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-xxl py-5'>
            <div className='container'>
                <div className='text-center>'>
                    <h3 className='section-title bg-white text-center text-success px-3'> Packages </h3>
                    <h1 className='mb-5 text-center'>Awesome packages</h1>
                </div>
                <div className='row g-4 justify-content-center'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='package-item'>
                            <div className='overflow-hidden'>
                                <img src='./image2.jpeg' alt="" className='img-fluid'/>
                            </div>

                            <div className='d-flex border-bottom'>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-map-marker-alt text-success me-2'></i> Thailand
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-calendar-alt text-success me-2'></i> 3 days
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-user text-success me-2'></i> 2 Person
                                </small>
                            </div>
                            <div className='text-center p-4'>
                                <h3 className='mb-0'>$149.00</h3>
                                <div className='mb-3'>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi sequi eveniet rem cupiditate distinctio optio cumque. Animi dolorum rerum sed tempora eum? Non accusantium dolores, temporibus quis itaque nam!</p>
                                <div className='d-flex justify-content-center mb-2'>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"30px 0 0 30px"}}>Read More</a>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"0 30px 30px 0"}}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <div className='col-lg-4 col-md-6'>
                        <div className='package-item'>
                            <div className='overflow-hidden'>
                                <img src='./image2.jpeg' alt="" className='img-fluid'/>
                            </div>

                            <div className='d-flex border-bottom'>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-map-marker-alt text-success me-2'></i> Thailand
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-calendar-alt text-success me-2'></i> 3 days
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-user text-success me-2'></i> 2 Person
                                </small>
                            </div>
                            <div className='text-center p-4'>
                                <h3 className='mb-0'>$149.00</h3>
                                <div className='mb-3'>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi sequi eveniet rem cupiditate distinctio optio cumque. Animi dolorum rerum sed tempora eum? Non accusantium dolores, temporibus quis itaque nam!</p>
                                <div className='d-flex justify-content-center mb-2'>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"30px 0 0 30px"}}>Read More</a>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"0 30px 30px 0"}}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4 col-md-6'>
                        <div className='package-item'>
                            <div className='overflow-hidden'>
                                <img src='./image2.jpeg' alt="" className='img-fluid'/>
                            </div>

                            <div className='d-flex border-bottom'>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-map-marker-alt text-success me-2'></i> Thailand
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-calendar-alt text-success me-2'></i> 3 days
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-user text-success me-2'></i> 2 Person
                                </small>
                            </div>
                            <div className='text-center p-4'>
                                <h3 className='mb-0'>$149.00</h3>
                                <div className='mb-3'>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi sequi eveniet rem cupiditate distinctio optio cumque. Animi dolorum rerum sed tempora eum? Non accusantium dolores, temporibus quis itaque nam!</p>
                                <div className='d-flex justify-content-center mb-2'>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"30px 0 0 30px"}}>Read More</a>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"0 30px 30px 0"}}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='col-lg-4 col-md-6'>
                        <div className='package-item'>
                            <div className='overflow-hidden'>
                                <img src='./image2.jpeg' alt="" className='img-fluid'/>
                            </div>

                            <div className='d-flex border-bottom'>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-map-marker-alt text-success me-2'></i> Thailand
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-calendar-alt text-success me-2'></i> 3 days
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-user text-success me-2'></i> 2 Person
                                </small>
                            </div>
                            <div className='text-center p-4'>
                                <h3 className='mb-0'>$149.00</h3>
                                <div className='mb-3'>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi sequi eveniet rem cupiditate distinctio optio cumque. Animi dolorum rerum sed tempora eum? Non accusantium dolores, temporibus quis itaque nam!</p>
                                <div className='d-flex justify-content-center mb-2'>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"30px 0 0 30px"}}>Read More</a>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"0 30px 30px 0"}}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='col-lg-4 col-md-6'>
                        <div className='package-item'>
                            <div className='overflow-hidden'>
                                <img src='./image2.jpeg' alt="" className='img-fluid'/>
                            </div>

                            <div className='d-flex border-bottom'>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-map-marker-alt text-success me-2'></i> Thailand
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-calendar-alt text-success me-2'></i> 3 days
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-user text-success me-2'></i> 2 Person
                                </small>
                            </div>
                            <div className='text-center p-4'>
                                <h3 className='mb-0'>$149.00</h3>
                                <div className='mb-3'>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi sequi eveniet rem cupiditate distinctio optio cumque. Animi dolorum rerum sed tempora eum? Non accusantium dolores, temporibus quis itaque nam!</p>
                                <div className='d-flex justify-content-center mb-2'>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"30px 0 0 30px"}}>Read More</a>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"0 30px 30px 0"}}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className='col-lg-4 col-md-6'>
                        <div className='package-item'>
                            <div className='overflow-hidden'>
                                <img src='./image2.jpeg' alt="" className='img-fluid'/>
                            </div>

                            <div className='d-flex border-bottom'>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-map-marker-alt text-success me-2'></i> Thailand
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-calendar-alt text-success me-2'></i> 3 days
                                </small>
                                <small className='flex-fill text-center border-end py-2'>
                                    <i className='fa fa-user text-success me-2'></i> 2 Person
                                </small>
                            </div>
                            <div className='text-center p-4'>
                                <h3 className='mb-0'>$149.00</h3>
                                <div className='mb-3'>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                    <small className='fa fa-star text-success'></small>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi sequi eveniet rem cupiditate distinctio optio cumque. Animi dolorum rerum sed tempora eum? Non accusantium dolores, temporibus quis itaque nam!</p>
                                <div className='d-flex justify-content-center mb-2'>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"30px 0 0 30px"}}>Read More</a>
                                    <a href='' className='btn btn-sm btn-success px-3' style={{borderRadius:"0 30px 30px 0"}}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    







                </div>
            </div>
        </div>



        <div className='container-xxl py-5'>
            <div className='container'>
                <div className='booking p-5'>
                    <div className='row g-5 align-items-center'>
                        <div className='col-md-6 text-white'>
                            <h6 className='text-white text-uppercase'>Booking</h6>
                            <h1 className='text-white mb-4'>Online Booking</h1>
                            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam quis repudiandae aspernatur quisquam magnam eligendi enim assumenda, doloribus rem a error cumque obcaecati, laboriosam voluptatibus aliquam, veniam sunt suscipit?</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta, mollitia earum perspiciatis autem ut pariatur. Facilis maxime, doloremque architecto earum placeat eveniet ratione! Voluptates recusandae illo facilis quas assumenda?</p>
                            <a href='' className='btn btn-outline-light py-3 px-5 mt-2'>Read More</a>
                        </div>
                        <div className='col-md-6'>
                            <h1 className='text-white mb-4'>
                                Book A Tour
                            </h1>
                            <form action=''>
                                <div className='row g-3'>
                                    <div className='col-md-6'>
                                        <div className='form-floating'>
                                            <input type="text" className='form-control bg-transparent' id="name" placeholder='Your Name'/>
                                            <label htmlFor="name" className='text-white'> Your Name</label>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-floating'>
                                            <input type="email" className='form-control bg-transparent' id="email" placeholder='Your Email'/>
                                            <label htmlFor="email" className='text-white'> Your Email</label>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-floating' id='date3'>
                                            <input type="datetime-local" className='form-control bg-transparent text-white' id="datetime"/>
                                            <label htmlFor="datetime" className='text-white'> Date & Time</label>
                                        </div>
                                    </div>
                                    
                                    <div className='col-md-6'>
                                        <div className='form-floating'>
                                            <select name='' id='select1' className='form-select bg-transparent'>
                                                <option value="1">Destination 1</option>
                                                <option value="2">Destination 2</option>
                                                <option value="3">Destination 3</option>
                                            </select>
                                            <label htmlFor='select1' className='text-white'>Destination</label>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <textarea className='form-control bg-transparent' placeholder="Special Request" id='message' style={{height:"100px"}}></textarea>
                                            <label htmlFor='message' className='text-white'>Special Request</label>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <button className='btn btn-outline-light w-100 py-3' type='submit'>Book Now</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Destination;