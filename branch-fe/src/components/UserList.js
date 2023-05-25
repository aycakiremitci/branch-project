import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from "../services/user_service";
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const StyledListGroup = styled(ListGroup)`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 80%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  column-gap: 15px;
`;

const StyledItem = styled(ListGroup.Item)`
  margin-bottom: 15px;
  font-size: 1.5em;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: #007bff;
    text-decoration: none;
  }
`;

const Background = styled.div`
  background-color: #efc6ef;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getAll()
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    if (!users) {
        return 'Loading...';
    }

    return (
        <Background>
            <StyledListGroup>
                <StyledItem><strong>ID</strong></StyledItem>
                <StyledItem><strong>Username</strong></StyledItem>
                <StyledItem><strong>Role</strong></StyledItem>
                {users.map(user => (
                    <>
                        <StyledItem key={user.id}>{user.id}</StyledItem>
                        <StyledItem>
                            <StyledLink to={`/users/${user.id}`}>{user.username}</StyledLink>
                        </StyledItem>
                        <StyledItem>{user.role}</StyledItem>
                    </>
                ))}
            </StyledListGroup>
        </Background>
    );
}

export default UserList;