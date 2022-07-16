import styled from 'styled-components';
import DetectorHero from '../../components/DetectorHero/DetectorHero';
import Header from '../../components/Header/Header';

const SearchPage = () => {
    return (
        <DetectorStyled>
            <Header />
            <DetectorHero />
        </DetectorStyled>
    )
}

export default SearchPage

const DetectorStyled = styled.div`
    margin: 1pc auto;
    max-width: 1400px;
`;