import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BranchService from "../services/branch_service";
import styled from 'styled-components';

const Background = styled.div`
    background-color: #efc6ef;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    width: 80%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2em;
`;

const Info = styled.p`
    font-size: 1.5em;
`;

const StyledButton = styled(Button)`
    background-color: #c0dcff;
    border-color: #c0dcff;
    &:hover {
        background-color: #c0dcff;
        border-color: #c0dcff;
    }
`;

function BranchDetail({ match }) {
    const [branch, setBranch] = useState(null);

    useEffect(() => {
        BranchService.get(`${match.params.id}`)
            .then(response => setBranch(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    if (!branch) {
        return 'Loading...';
    }

    return (
        <Background>
            <Card>
                <Title>{branch.name}</Title>
                <Info>Full Address: {branch.full_address}</Info>
                <Info>Phone: {branch.phone}</Info>
                <Info>Latitude: {branch.latitude}</Info>
                <Info>Longitude: {branch.longitude}</Info>
                <StyledButton as={Link} to={`/branches/${match.params.id}/edit`} variant="primary">Edit Branch</StyledButton>
            </Card>
        </Background>
    );
}

export default BranchDetail;