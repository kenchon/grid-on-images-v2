import React from 'react'
import styled from 'styled-components'

type HeaderProps = {
    aboutMeIcon: {
        urlToAboutMe: string,
        imgSrcToAboutMe: string
    },
    githubReposIcon: {
        urlToGithubRepos: string,
        imgSrcToGithubRepos: string
    }
}

// TODO: Parameterize 'href' and 'src' so that they could be injected from App component
const Header: React.FC<HeaderProps> = (props) => {
    return(
        <HeaderBlock>
            <Title>Grid on Images</Title>
            <Navbar>
                <ul>
                    <li>
                        <Icon href={ props.aboutMeIcon.urlToAboutMe } src={ props.aboutMeIcon.imgSrcToAboutMe } />
                    </li>
                    <li>
                        <Icon href={ props.githubReposIcon.urlToGithubRepos } src={ props.githubReposIcon.imgSrcToGithubRepos } />
                    </li>
                </ul>
            </Navbar>
        </HeaderBlock>
    )
}

export default Header

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
`

const Title = styled.h1`
    font-style: italic;
    color: white;
    padding-left: 30px;
`

const Navbar = styled.nav`
    padding-right: 100px;

    ul {
        padding: 0 50px 0 auto;
        list-style: none;
        margin: 0;
        display: flex;
    }
    li {
        margin: 0 0 0 15px;
        font-size: 20px;
    }
`

const ImgContainer = styled.div`
    padding-right: 40px;
    img {
        width: 60px;
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
}