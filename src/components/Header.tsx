import React from 'react';
import styled from 'styled-components';
import aboutMe from 'assets/about-me.png';
import github from 'assets/github.png';

// TODO: Parameterize 'href' and 'src' so that they could be injected from App component
const Header: React.FC = () => {
    return(
        <HeaderBlock>
            <Title>Grid on Images</Title>
            <Navbar>
                <ul>
                    <li>
                        <Icon href="https://kenchon.github.io/blog/authors/Kenya-Hondoh" src={ aboutMe } />
                    </li>
                    <li>
                        <Icon href="https://github.com/kenchon/grid-on-images" src={ github } />
                    </li>
                </ul>
            </Navbar>
        </HeaderBlock>
    )
}

export default Header;

const HeaderBlock = styled.header`
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

// TODO: Make Navbar nestable
const Navbar = styled.nav`
    margin: 0 50px 0 0;
    padding-right: 100px;
    ul {
        list-style: none;
        margin: 0;
        display: flex;
    }
    li {
        margin: 0 0 0 15px;
        font-size: 20px;
    }
    li a {
       color: white;
    }
`;

const ImgContainer = styled.div`
    padding-right: 40px;
    img {
        width: 80px;
    }
`

const Icon = (props: {href: string, src: string}) => {
    return (
        <ImgContainer>
            <a href={props.href}>
                <img src={props.src}/>
            </a>
        </ImgContainer>
    )
};