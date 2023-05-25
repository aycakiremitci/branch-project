import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import React  from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #efc6ef;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const StyledCard = styled(Card)`
    width: 18rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  background-color: #c0dcff;
  border-color: #c0dcff;

  &:hover {
    background-color: #c0dcff;
    border-color: #c0dcff;
  }
`;

function LandingPage() {
    return (
        <Background>
            <StyledCard>
                <Card.Body>
                    <Card.Title>Branch List</Card.Title>
                    <StyledButton variant="primary" as={Link} to="/branches">View Branches</StyledButton>
                </Card.Body>
            </StyledCard>

            <StyledCard>
                <Card.Body>
                    <Card.Title>User List</Card.Title>
                    <StyledButton variant="primary" as={Link} to="/users">View Users</StyledButton>
                </Card.Body>
            </StyledCard>
        </Background>
    );
}

export default LandingPage;