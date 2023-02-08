import { NavLink } from 'react-router-dom';

const Footer=()=>{
    return( 
            <div className='main-footer' >
            <div className='container-fluid bg-secondary'>
                <div className='row'>
                  <div className='col'>
                      <h2>Address</h2>
                      <ul className='list-unstyled'>
                          <li>#205 Humber College</li>
                          <li> Etobicocke</li>
                          <li>Canada</li>
                      </ul>
                  </div>
                  <div className="col">
                    <h2>Popular Courses</h2>
                    <ul className='list-unstyled'>
                       <li>Information Technology Solutions</li>
                       <li>Project Management</li>
                       <li>Enterprise Software Development</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2>Programs</h2>
                    <ul className='list-unstyled'>
                       <li>Full-Time Programs</li>
                       <li>Part-Time Programs</li>
                       <li>Learning</li>
                       <li>Continuous Professional</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2>Popular Courses</h2>
                    <ul className='list-unstyled'>
                       <li>Information Technology Solutions</li>
                       <li>Project Management</li>
                       <li>Enterprise Software Development</li>
                    </ul>
                  </div>                
                </div>
                <div className="row">
                 <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Terms Of Service | Privacy
                 </p>   
                </div>
            </div>
            </div>

    )
}

export default Footer;