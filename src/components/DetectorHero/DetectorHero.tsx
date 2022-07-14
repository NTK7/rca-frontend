import styled from "styled-components";
import { Input } from "antd";
import { useState } from "react";
import axios from "axios";
import CustomButton from "../../common/CustomButton/CustomButton";
import { detectionApi } from "../../api/DetectionApi";

const DetectorHero = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [completedSearch, setCompletedSearch] = useState(false)
  const [searchText, setSearchText] = useState<string>("");
  const [reviewsList, setReviewsList] = useState([]);

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleReset = () => {
    setSearchText("");
    setReviewsList([]);
    setCompletedSearch(false);
  };

  const handleScan = () => {
    if (!searchText) {
      alert("Please enter text to scan");
      return;
    }
    setIsLoading(true);

    axios
      .get(`${detectionApi.search}/${searchText}`)
      .then((response) => {
        setCompletedSearch(true);
        let reviews = response.data;
        setReviewsList(reviews);
      })
      .catch(() => alert("Something went wrong when scanning the text"))
      .finally(() => setIsLoading(false));
  };

  return (
    <DetectorHeroStyled>
      <h2>Search reviews by keywords</h2>
      <p>
        You can search for reviews based on the search keyword you enter with in
        the field.
      </p>
      <form>
        <Input
          placeholder="Enter search key word"
          value={searchText}
          onChange={handleSearchText}
          style={{ margin: "5px" }}
        />
        <section style={{ display: "flex" }}>
          <CustomButton
            width="120px"
            borderRadius="3px"
            type="primary"
            content={isLoading ? "loading..." : "Search"}
            isDisabled={isLoading}
            handleEvent={handleScan}
          />
          <CustomButton
            width="120px"
            borderRadius="3px"
            type="secondary"
            isDisabled={isLoading}
            content="Reset"
            handleEvent={handleReset}
          />
        </section>
      </form>

      <br />
      {reviewsList.length > 0 && (
        <div>
          <h3>Search results:</h3>
          <ul>
            {reviewsList.map((review: any, index) => (
              <li key={index}>
                {review.sentense} = <strong>{review.review} (Type = {review.reviewType})</strong>{" "}
              </li>
            ))}
          </ul>
        </div>
      )}

      {completedSearch && reviewsList.length === 0 && (
        <div> No results found for the search keyword </div>
      )}
    </DetectorHeroStyled>
  );
};

export default DetectorHero;

const DetectorHeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8vh 2pc;
`;
