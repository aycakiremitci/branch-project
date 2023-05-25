import React, { useEffect, useState } from 'react';
import UserService from "../services/user_service";
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

function UserDetail({ match }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        UserService.get(`${match.params.id}`)
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    if (!user) {
        return 'Loading...';
    }

    return (
        <Background>
            <Card>
                <Title>{user.username}</Title>
                <Info>Role: {user.role}</Info>
            </Card>
        </Background>
    );
}

export default UserDetail;