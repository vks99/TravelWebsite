import { NavLink } from 'react-router-dom';
import '../App.css'

const Contactus=()=>{
    return(
        <div className="container-fluid p-5">
            <div className="contact-form shadow rounded mt-5">
                <div className="row">
                    <div className="col-md-4 form-left-side p-5  text-white">
                        <h2 className='mb-4'>Let's Get in touch</h2>
                        <p>We're for any suggestion or just to have a chat</p>
                        <div className="contact-us">
                            <div className="address d-flex align-items-center mb-4">
                                <i className='fa-solid fa-location-dot icon'></i>
                                <p><b>Address : </b>7245 Delmonte Crescent</p>
                            </div>
                            <div className="phone d-flex align-items-center mb-4">
                                <i className='fa-solid fa-phone icon'></i>
                                <p><b>Phone : </b>+1 4375330356</p>
                            </div>
                            <div className="Email d-flex align-items-center mb-4">
                                <i className='fa-solid fa-envelope icon'></i>
                                <p><b>Email : </b>Tarvel@gmail.com</p>
                            </div>
                            <div className="website d-flex align-items-center mb-4">
                                <i className='fa-solid fa-earth-asia icon'></i>
                                <p><b>Website : </b>Tarvel.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 form-right-side p-5 ">
                        <h2 className='mb-4'>Get in touch</h2>
                        <form className='row g-3'>
                            <div className="col-md-6">
                                <label htmlFor="FullName" className='form-label'>Full Name</label>
                                <input type="text" className='form-control' placeholder='Name'/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="Email" className='form-label'>Full Name</label>
                                <input type="email" className='form-control' placeholder='Email'/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputSubject" className='form-label'>Subject</label>
                                <input type="text" className='form-control' placeholder='Subject'/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputMessage" className='form-label'>Message</label>
                                <textarea className='form-control' rows={6} placeholder='Message'></textarea>
                            </div>
                            <div className="col-12">
                                <button className='button' type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus;