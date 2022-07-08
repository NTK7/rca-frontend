import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { detectionApi } from "../../api/DetectionApi";
import CustomButton from "../../common/CustomButton/CustomButton";

type SentenseType = {
  sentense: string;
  review: string;
  reviewType: string;
};

const Detector = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textareaContent, setTextareaContent] = useState<string>("");
  const [result, setResult] = useState<string | undefined>();
  const [reviewSentenses, setReviewSentenses] = useState<SentenseType[] | undefined>(undefined);

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
        console.log("response", response);
        let detectionResult = response.data["Prediction"];
        let reviewSentenses = response.data["Keys"];

        setResult(detectionResult);
        setReviewSentenses(reviewSentenses);
      })
      .catch(() => alert("Something went wrong when scanning the text"))
      .finally(() => setIsLoading(false));
  };

  const handleReset = () => {
    setTextareaContent("");
    setReviewSentenses(undefined);
    setResult(undefined);
  };

  return (
    <DetectorStyled>
      <textarea
        rows={10}
        style={{ width: "97%" }}
        disabled={isLoading}
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
        placeholder="Enter message here..."
      />
      <section className="buttons">
        <CustomButton
          width="150px"
          borderRadius="3px"
          type="primary"
          content={isLoading ? "loading..." : "Scan"}
          isDisabled={isLoading}
          handleEvent={handleScan}
        />
        <CustomButton
          width="150px"
          borderRadius="3px"
          type="secondary"
          isDisabled={isLoading}
          content="Reset"
          handleEvent={handleReset}
        />
      </section>

      {result && (
        <div className="detection-result">
          <h3>Detection result:</h3>
          <p>Review is of type:{" "}<strong>{result}</strong></p>
        </div>
      )}

      {reviewSentenses && (
        <div className="review-sentenses">
          <h3>Review sentences:</h3>

          {reviewSentenses.map((sentense, index) => (
            <p key={index}>
              {" "}
              # {sentense.sentense} = <strong>{sentense.review} (Type = {sentense.reviewType})</strong>{" "}
            </p>
          ))}
        </div>
      )}
    </DetectorStyled>
  );
};

export default Detector;

const DetectorStyled = styled.div`
  overflow-x: hidden;
  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 2pc;
    margin-bottom: 4pc;
  }

  textarea {
    height: 100%;
    padding: 1pc;
    font-size: 1em;
    margin: auto 2pc;
    outline: none;
  }

  .detection-result {
    margin: 2pc 1pc;
    h3 {
      font-weight: bold;
      font-size: 1.4em;
    }
    p {
      font-size: 1.1em;
    }
  }

  .review-sentenses {
    margin: 2pc 1pc;

    h3 {
      font-size: 1.4em;
      font-weight: bold;
    }
    p {
      font-size: 1.1em;
    }
  }
`;
