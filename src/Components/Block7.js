import Carousel from 'react-bootstrap/Carousel';
import Block71 from '../images/Block71.avif';
import Block72 from '../images/Block72.avif';

function Block7() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Block71}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Block72}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Block7;