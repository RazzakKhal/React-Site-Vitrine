import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Header from './Header';
import Footer from './Footer';
import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { useState } from 'react';


const Layout = () => {

   const [Theme, setTheme] = useState(true);


    return (
        <ThemeProvider theme={Theme ? LightTheme : DarkTheme}>
        <Wrapped>
             <Header Theme={Theme} setTheme={setTheme}/>
                 
             <Bobo>
             <Routes>
                <Route path='/About' element={<About />} />
                <Route path='/' element={<Home />} />
             </Routes>
             </Bobo>
            <Footer />
         </Wrapped>
        </ThemeProvider>
    )
};

const Wrapped = styled.div`
color : ${props => props.theme.color};
background-color : ${props => props.theme.backgroundColor};
font-family : ${props => props.theme.fontFamily};
button{
    font-family : ${props => props.theme.fontFamily};
    margin-top : 10px;
    height : 10vh;
    background-color : ${ props => props.theme.backgroundColor };
    color : ${ props => props.theme.color};
    padding-right : 20px;
    padding-left : 20px;
    
};
button:hover{
    background-color : ${ props => props.theme.color };
    color : ${ props => props.theme.backgroundColor};
    transition : 0.5s;

};
transition : 1s;
`;

const Bobo = styled.body`
height : 70vh;
`;

export default Layout
