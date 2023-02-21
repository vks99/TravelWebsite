import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';

type order = {
    Destination: string;
    Price:string;
    Departure:string;
    Date:string;
}

const History=()=>{
    
    return (

        <div className="container">
            <div className = "travel_images">
            <Carousel className='my-1'>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="travel.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="bg-img-top"
                src="travel1.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            </Carousel>
      </div>
            <div className="card-header">
                        <h4>Your order history</h4>
            </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Destination:</th>
              <th>Departure:</th>
              <th>Date:</th>
              <th>Price:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Toronto</td>
              <td>New York</td>
              <td>2023/01/02</td>
              <td>$300</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Toronto</td>
              <td>Ottawa</td>
              <td>2023/01/03</td>
              <td>$200</td>
            </tr>
          </tbody>
        </Table>
        </div>
      );
    }

export default History;