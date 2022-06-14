import styled from "styled-components";
import { theme } from "../../utils/theme";

const About = () => {
  return (
    <AboutStyled id="about-section">
      <h2>About Resturatant Review Classifier</h2>
      <p>
        This sole purpose of this application is to make use of sentimental analysis to classify the sentiment of a restaurant review. If the review is positive, it will be classified as positive. If the review is negative, it will be classified as negative. Using these results the end user will be able to make decisions with the resturant.
      </p>

      <br />
      <br />
      <br />
    </AboutStyled>
  );
};

export default About;

const AboutStyled = styled.div`
  max-width: 1400px;

  > h2 {
    font-size: 2rem;
    color: ${theme.buttonColor.primary};
    text-align: center;
  }

  > p {
    font-size: 1.2rem;
    text-align: justify;
  }
`;
