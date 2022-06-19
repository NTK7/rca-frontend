import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { detectionApi } from "../../api/DetectionApi";
import CustomButton from "../../common/CustomButton/CustomButton";

const Detector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textareaContent, setTextareaContent] = useState<string>("");
  const [result, setResult] = useState<string | undefined>();

  const handleScan = () => {
    if (!textareaContent) {
      alert("Please enter text to scan");
      return;
    }
    setIsLoading(true);
    let detectionRequestBody = { review: textareaContent };
    axios
      .post(detectionApi.predict, detectionRequestBody)
      .then((response) => {
        let detectionResult = response.data["Prediction"];
        setResult(detectionResult);
      })
      .catch(() => alert("Something went wrong when scanning the text"))
      .finally(() => setIsLoading(false));
  };

  const handleReset = () => {
    setTextareaContent("");
    setResult(undefined);
  };

  return (
    <DetectorStyled>
      <textarea
        rows={10}
        style={{ width: "100%" }}
        disabled={isLoading}
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
        placeholder="Enter message here..."
      />
      <section className="buttons">
        <CustomButton
          width="150px"
          borderRadius="8px"
          type="primary"
          content="Scan"
          isDisabled={isLoading}
          handleEvent={handleScan}
        />
        <CustomButton
          width="150px"
          borderRadius="8px"
          type="secondary"
          isDisabled={isLoading}
          content="Reset"
          handleEvent={handleReset}
        />
      </section>

      {result && (
        <div className="detection-result">
          <h3>Detection result:</h3> Review is of type: {result}
        </div>
      )}
    </DetectorStyled>
  );
};

export default Detector;

const DetectorStyled = styled.div`
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 2pc;
    margin-bottom: 4pc;
  }

  textarea {
    height: 100%;
    border-radius: 8px;
    padding: 1pc;
    font-size: 1.2em;
    margin: auto 1pc;
    outline: none;
  }

  .detection-result {
    margin: 4pc 1pc;
    text-transform: uppercase;

    h3 {
      font-size: 1.2em;

      font-weight: bold;
    }

    strong {
      font-size: 1.2em;

    }
  }
`;
