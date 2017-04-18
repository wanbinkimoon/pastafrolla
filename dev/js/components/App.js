import React from 'react';
import HelloList from '../containers/hello-list';
import HelloDetails from '../containers/hello-detail';
import styled from 'styled-components';

const Heading = styled.h2`
	color: tomato;
`;
const App = () => (
    <div>
        <Heading>Hello List</Heading>
        <HelloList />
        <hr />
        <Heading>Hello Details</Heading>
        <HelloDetails />
    </div>
);

export default App;
