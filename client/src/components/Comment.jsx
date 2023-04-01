import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999;

`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme})=> theme.text};

`
    
const Name = styled.span`
    font-size:12px;
    font-weight:500;
`
const Date = styled.span`

    font-size:12px;
    font-weight: 400;
    color: ${({theme})=> theme.textSoft};
    margin-left: 5px;

`
const Text = styled.span`
    font-size: 13px;

`


const Comment = ()=>
{
    return(

        <Container>
            <Avatar></Avatar>
            <Details>
                <Name>YourTube</Name>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae deleniti assumenda itaque vel. Quibusdam perferendis aperiam maxime quo minus inventore accusantium. Mollitia pariatur soluta magni dolor amet minus incidunt.</Text>
            </Details>
        </Container>
    )
}

export default Comment