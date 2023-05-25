import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BranchService from "../services/branch_service";
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
    grid-template-columns: 1fr 3fr 2fr 2fr 2fr 2fr;
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
    color: #c0dcff;
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

function BranchList() {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        BranchService.getAll()
            .then(response => setBranches(response.data))
            .catch(error => console.error(error));
    }, []);

    if (!branches) {
        return 'Loading...';
    }

    return (
        <Background>
            <StyledListGroup>
                <StyledItem><strong>ID</strong></StyledItem>
                <StyledItem><strong>Name</strong></StyledItem>
                <StyledItem><strong>Full Address</strong></StyledItem>
                <StyledItem><strong>Latitude</strong></StyledItem>
                <StyledItem><strong>Longitude</strong></StyledItem>
                <StyledItem><strong>Phone</strong></StyledItem>
                {branches.map(branch => (
                    <>
                        <StyledItem key={branch.id}>{branch.id}</StyledItem>
                        <StyledItem>
                            <StyledLink to={`/branches/${branch.id}`}>{branch.name}</StyledLink>
                        </StyledItem>
                        <StyledItem>{branch.full_address}</StyledItem>
                        <StyledItem>{branch.latitude}</StyledItem>
                        <StyledItem>{branch.longitude}</StyledItem>
                        <StyledItem>{branch.phone}</StyledItem>
                    </>
                ))}
            </StyledListGroup>
        </Background>
    );
}

export default BranchList;