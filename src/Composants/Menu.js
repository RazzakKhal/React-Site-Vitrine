import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';


const Menu = () => {

    const location = useLocation();

    return (
        <div>
            <Lulu>
                <li><Currentpage isCurrentpage = {location.pathname === '/'}>  <Link to='/' >Home</Link> </Currentpage></li>
                <li><Currentpage isCurrentpage = {location.pathname === '/About'}><Link to='/About' >About</Link></Currentpage></li>
            </Lulu>
        </div>
    )
};


const Lulu = styled.ul`
display : flex;
list-style : none;


a {
    text-decoration : none;
    color : inherit;
    margin-right : 15px;
    font-size : 1.2rem;
    padding-bottom : 10px;
};

a:hover {
    border-bottom : 1px solid;
    padding-bottom : 10px;

};


`;

const Currentpage = styled.span`
a {
    ${props => props.isCurrentpage ? 'border-bottom : 1px solid' : ''};
};

`;

export default Menu
