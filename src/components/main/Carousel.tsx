import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: false,
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.section`
  display: block;
  padding: 0 2rem;
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin-right: 2rem;
  }

  .slick-slider > button {
    display: none !important;
  }

  .slick-arrow,
  .slick-next {
    display: none !important;
  }
`;
