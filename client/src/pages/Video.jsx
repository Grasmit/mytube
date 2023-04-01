import React from "react";
import styled from "styled-components";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import Comments from "../components/Comments";
import Comment from "../components/Comment";
import Card from "../components/Card";



const Container = styled.div`
    display:flex;
    gap:24px;
`
const Content = styled.div`

    flex:5;
`

const VideoWrapper = styled.div``


const Title = styled.h1`
    font-size:18px;
    font-weight: 400;
    margin-top: 2px;
    margin-bottom: 10px;
    color: ${({theme})=> theme.text};

`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
    
const Info = styled.div`
    color: ${({theme})=> theme.textSoft};
`

const Buttons = styled.div`

    display: flex;
    gap: 20px;
    color: ${({theme})=> theme.textSoft};
`

const Button = styled.div`

    display: flex;
    align-items: center;
    gap: 5px;
`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=> theme.soft};
;
`

const Recommandation = styled.div`
    flex:2;
`
const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div`

    display: flex;
    gap: 20px;
`

const Image = styled.img`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999;
`
    
const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme})=> theme.text};

`

const ChannelDetail = styled.div``
    
const ChannelName = styled.span`
    font-weight: 500;
`
    
const ChannelCOunter = styled.span`
    margin-top: 5px;
    margin-bottom: 15px;
    color: ${({theme})=> theme.textSoft};
    font-size: 10px;

`

const ChannelDescription = styled.p`
    font-size: 12px;
`

const Subscribe = styled.button`
    background-color: red;
    font-weight: 500;
    color: white;
    border:none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`

const Video = () => 
{
    return(
        <>
        <Container>
            <Content>
                <VideoWrapper>
                     <iframe
                     
                     width='100%'
                     height='550'
                     src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                     title="Youtube Video Player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     ></iframe>
                </VideoWrapper>
                <Title> Test Video</Title>
                <Details>
                    <Info>7,948,154 views - Jun 22,2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpIcon />
                            123
                        </Button>
                        <Button>
                            <ThumbDownIcon />
                            dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon />
                            share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon />
                            save
                        </Button>
                        
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src="" />
                        <ChannelDetails>
                            <ChannelName>MyTube</ChannelName>
                            <ChannelCOunter>342k Subscribers</ChannelCOunter>
                            <ChannelDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ChannelDescription>

                        </ChannelDetails>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <Hr />
                <Comments />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </Content>
            <Recommandation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />

            </Recommandation>
        </Container>
        </>
    )

}

export default Video