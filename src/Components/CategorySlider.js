  import Carousel from 'react-bootstrap/Carousel';
  import category1 from '../images/category1.avif';
  import category2 from '../images/category2.avif';
  import category3 from '../images/category3.avif';
  import category4 from '../images/category4.png';
  import category5 from '../images/category5.avif';
  import category6 from '../images/category6.avif';
  import category7 from '../images/category7.avif';
  import category8 from '../images/category8.avif';
  import category9 from '../images/category9.avif';
  import category10 from '../images/category10.avif';
  import category11 from '../images/category11.avif';
  import category12 from '../images/category12.avif';
  import category13 from '../images/category13.png';
  import category14 from '../images/category 14.avif';
  import category15 from '../images/category 15.avif';
  import category16 from '../images/category16.avif';
  import category17 from '../images/category17.avif';
  import category18 from '../images/category18.avif';
  import category19 from '../images/category19.avif';
  import category20 from '../images/category20.avif';
  import category21 from '../images/category21.avif'; 
  import category22 from '../images/category22.avif';
  import category23 from '../images/category23.avif';
  import category24 from '../images/category24.avif';

  function CategorySlider() {
    return (
      <Carousel className='pb-5 pt-3' style={{backgroundColor: "#FFF0BE"}} variant="dark">
        <Carousel.Item>
          <div className='d-flex justify-content-center align-items-center'>
          <img width='110px' src={category1} />
          <img width='110px' src={category2} />
          <img width='110px' src={category3} />
          <img width='110px' src={category4} />
          <img width='110px' src={category5} />
          <img width='110px' src={category6} />
          <img width='110px' src={category7} />
          <img width='110px' src={category8} />
          <img width='110px' src={category9} />
          <img width='110px' src={category10} />
          <img width='110px' src={category11} />
          <img width='110px' src={category12} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center'>
          <img width='110px' src={category13} />
          <img width='110px' src={category14} />
          <img width='110px' src={category15} />
          <img width='110px' src={category16} />
          <img width='110px' src={category17} />
          <img width='110px' src={category18} />
          <img width='110px' src={category19} />
          <img width='110px' src={category20} />
          <img width='110px' src={category21} />
          <img width='110px' src={category22} />
          <img width='110px' src={category23} />
          <img width='110px' src={category24} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center'>
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          <img width='110px' src={category1} />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default CategorySlider;