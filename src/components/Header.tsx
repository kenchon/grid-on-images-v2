import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    padding: 30px 4% 30px 30px;
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 480px;
    background-color: #3D5B81;
    display: flex;
    align-items: center;
    color: white;
    height: 100px;
    z-index: 999;
`;

const Title = styled.h1`
    font-style: italic;
    color: white;
    padding-left: 30px;
`;

const Navbar = styled.nav`
    margin: 0 50px 0 0;
    padding-right: 100px;
`;

const Icon = (props: any) => {
    return (
        <a href={props.href}>
            <img src={props.src}/>
        </a>
    )
};

function HeaderContainer() {
    return(
        <Header>
            <Title>Grid on Images</Title>
            <Navbar>
                <ul>
                    <li>
                        <Icon href="https://kenchon.github.io/blog/authors/Kenya-Hondoh" src="./assets/about-me.png" />
                    </li>
                    <li>
                        <Icon href="https://github.com/kenchon/grid-on-images" src="./assets/github.png" />
                    </li>
                </ul>
            </Navbar>
        </Header>
    )
}

export default HeaderContainer();