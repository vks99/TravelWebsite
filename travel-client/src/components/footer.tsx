import { NavLink } from 'react-router-dom';

const Footer=()=>{
    return( 
            <div className='main-footer' >
            <div className='container-fluid bg-secondary'>
                <div className='row'>
                  <div className='col'>
                      <h2>Student 1</h2>
                      <ul className='list-unstyled'>
                          <li>Vikas Uppala</li>
                          <li> N01486527</li>
                          <li>vikasgupta99@gmail.com</li>
                      </ul>
                  </div>
                  <div className="col">
                    <h2>Student 2</h2>
                    <ul className='list-unstyled'>
                       <li>Sarada Maddipatla</li>
                       <li>N01486876</li>
                       <li>saradamaddipatla364@gmail.com</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2>Student 3</h2>
                    <ul className='list-unstyled'>
                       <li>Su Zhang</li>
                       <li>N01572673</li>
                       <li>suzhang@gmail.com</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2>Student 4</h2>
                    <ul className='list-unstyled'>
                       <li>Sethu Madhava Naidu Lankipalli</li>
                       <li>N01445828</li>
                       <li>sethumadhav202@gmail.com</li>
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