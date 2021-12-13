import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const Header = ({Theme, setTheme}) => {
    return (
        <Headous>
            <One>Entrainement React 2</One>
            <Menu />
            <button onClick={ () => Theme ? setTheme(false) : setTheme(true)}>Switch Theme</button>
        </Headous>
    )
};


const Headous = styled.header`

border-bottom : 1px solid;
display : flex;
justify-content : space-between;
padding-top : 10px;
padding-left : 10px;
padding-right : 10px;
height : 15vh;

`;

const One = styled.p`

font-size : 1.4rem;
`;



export default Header
