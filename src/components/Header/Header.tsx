import { Image, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { RoutePaths } from '../../app/routes';

const Header = () => {
    const { Title } = Typography;
    const history = useHistory();

    const navigateToHome = () => {
        history.replace(RoutePaths.home);
    }

    return (
        <Container>
            <ImageContainer onClick={navigateToHome}>
                <Image src="logos/logo1.PNG" alt="logo" title="Resturatant Review Classifier" preview={false} />
                <Title level={3}>Resturatant Review Classifier</Title>
            </ImageContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100px;
        cursor: pointer;
        object-fit: contain;
    }

`;