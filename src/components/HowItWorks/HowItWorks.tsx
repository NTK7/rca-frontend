import styled from "styled-components";
import { theme } from "../../utils/theme";

const HowItWorks = () => {
  return (
    <HowItWorksStyled>
      <h2>How it works? </h2>
      <p>
        The application will be able to scan the text and classify it as either "Positive" or "Negative" review text. Naviagte to the detection section and paste the text you want to scan and click on the scan button. The result will be displayed. It will be able to break the sentences and find the sentiment for each sentence from the text.
      </p>

      <img src="banner.PNG" alt="" />

      <br />
      <br />
      <br />
    </HowItWorksStyled>
  );
};

export default HowItWorks;

const HowItWorksStyled = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 2rem;
    color: ${theme.buttonColor.primary};
    text-align: center;
  }

  > p {
    text-align: justify;
    font-size: 1.2rem;
  }

  > img {
    object-fit: contain;
    height: 300px;
    padding-top: 2pc;
}
`;
