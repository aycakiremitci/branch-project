import React, { useEffect, useState } from 'react';
import { Form, Button as BootstrapButton } from 'react-bootstrap';
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

const FormLabel = styled(Form.Label)`
    font-size: 1.2em;
`;

const FormControl = styled(Form.Control)`
    font-size: 1.2em;
    margin-bottom: 10px;
`;

const Button = styled(BootstrapButton)`
    background-color: #c0dcff;
    border-color: #c0dcff;
    &:hover {
        background-color: #c0dcff;
        border-color: #c0dcff;
    }
`;

function BranchEdit({ match, history }) {
    const [branch, setBranch] = useState({});

    useEffect(() => {
        BranchService.get(`${match.params.id}`)
            .then(response => setBranch(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    function handleInputChange(event) {
        setBranch({
            ...branch,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        BranchService.updateBranch(`${match.params.id}`, branch)
            .then(response => history.push(`/branches/${match.params.id}`))
            .catch(error => console.error(error));
    }

    return (
        <Background>
            <Card>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBranchName">
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text" name="name" value={branch.name || ''} onChange={handleInputChange} placeholder="Enter branch name" />
                    </Form.Group>

                    <Form.Group controlId="formFullAddress">
                        <FormLabel>Full Address</FormLabel>
                        <FormControl type="text" name="full_address" value={branch.full_address || ''} onChange={handleInputChange} placeholder="Enter full address" />
                    </Form.Group>

                    <Form.Group controlId="formLatitude">
                        <FormLabel>Latitude</FormLabel>
                        <FormControl type="text" name="latitude" value={branch.latitude || ''} onChange={handleInputChange} placeholder="Enter latitude" />
                    </Form.Group>

                    <Form.Group controlId="formLongitude">
                        <FormLabel>Longitude</FormLabel>
                        <FormControl type="text" name="longitude" value={branch.longitude || ''} onChange={handleInputChange} placeholder="Enter longitude" />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <FormLabel>Phone</FormLabel>
                        <FormControl type="text" name="phone" value={branch.phone || ''} onChange={handleInputChange} placeholder="Enter phone number" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Card>
        </Background>
    );
}

export default BranchEdit;