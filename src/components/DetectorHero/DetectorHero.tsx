import styled from "styled-components";

const DetectorHero = () => {
  return (
    <DetectorHeroStyled>
      <section className="left">
        {/* <h2>Discover the truth</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique officia quas et corporis ullam eius. Magnam natus est suscipit, eaque fugiat autem fuga maxime voluptates officiis sequi iste modi! Quo esse impedit ex obcaecati excepturi odio id doloribus at maxime ad nobis, neque, unde eum?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, sequi unde corporis cupiditate quaerat nesciunt deserunt ratione. Aliquid eum quas suscipit optio aperiam obcaecati nesciunt deserunt dolor. Quidem, assumenda facere.
        </p> */}
      </section>

      <section className="right">
        {/* <img src="banner-2.PNG" alt="" /> */}
      </section>
    </DetectorHeroStyled>
  );
};

export default DetectorHero;

const DetectorHeroStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8vh 2pc;

  section {
    img {
      object-fit: contain;
      height: 250px;
    }
    h2 {
      font-size: 2em;
    }
    p {
        font-size: 1.2em;
        width: 45vw;
        text-align: justify;
    }
  }
`;
