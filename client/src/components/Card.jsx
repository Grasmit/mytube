import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`

    width: ${(props)=> props.type !== "sm" && "360px"};
    margin-bottom: ${(props)=> props.type === "sm" ? "10px":"45px"};;
    cursor: pointer;
    display: ${(props)=> props.type === "sm" && "flex"};
    gap:10px;
`

const Image = styled.img`

    width: 100%;
    height: ${(props)=> props.type === "sm" ? "120px":"202px"};
    background-color: #999;
    flex: 1;

`

const Details = styled.div`
    display: flex;
    margin-top: ${(props)=> props.type !== "sm" && "16px"};
    gap: 12px;
    flex: 1;
`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props)=> props.type === "sm" && "none"};
`

const Texts = styled.div``

const Title = styled.h1`

    font-size: 14px;
    font-weight: 500;
    color: ${({theme})=> theme.text};
`

const ChannelName = styled.h2`
    font-size: 12px;
    color: ${({theme})=> theme.testSoft};
    margin: 9px 0px;
`

const Info = styled.div`
    font-size:12px;
    color: ${({theme})=> theme.text};
`


const Card = ({type})=>
{
    return(
        <>
        <Link to="video/test" style={{textDecoration:"none",color:'inherit'}}>
        <Container type={type}>
            <Image src="https://www.fanpop.com/clubs/random/images/28065165/title/randomised-screencap" type={type} />
            <Details>
                <ChannelImage type={type} />
                <Texts>
                    <Title>
                        Test video
                    </Title>
                    <ChannelName>
                        Mytube
                    </ChannelName>
                    <Info>
                            660,908 views - 1 day ago
                    </Info>
                </Texts>
            </Details>
        </Container>
        </Link>
        </>
    )

}

export default Card