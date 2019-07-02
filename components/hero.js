import PropTypes from "prop-types"
import styled from "styled-components"

const HeroImage = styled.div`
  /* The image used */
  background-image: url("${props => props.image}");
  background-color: #90B2CC;

  /* Set a specific height */
  height: 100vh;
  @media (max-width: 480px) and (max-height: 600px) {
    max-height: calc(100% - 68px)
  }

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 991.1px) and (max-width: 1199px) {
    background-position: -5rem;
  }

  @media (max-width: 991px) {
    background-position: -8rem;
  }

  @media (max-width: 768px) {
    background-position: -8rem bottom;
    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      
    }
  }
`

const HeroText = styled.div`
  min-width: 250px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1199px) {
    left: 50%;
    transform: translate(-10%, -50%);
  }

  @media (max-width: 768px) {
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
  }
`

const Hero = ({ image, children }) => (
  <HeroImage image={image}>
    <HeroText>{children}</HeroText>
  </HeroImage>
)

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  /** text to display (e.g. USP) */
  children: PropTypes.object.isRequired
}

/** @component */
export default Hero
