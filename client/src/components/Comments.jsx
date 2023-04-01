import React from "react";
import styled from "styled-components";

const Container = styled.div``

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap:10px
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999;

`

const Input = styled.input`

    border: none;
    border-bottom: 0.5px solid ${({theme})=> theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`


const Comments = ()=>
{
    return(

        <Container>
            <NewComment>
                <Avatar ></Avatar>
                <Input placeholder="Add a comment" />
            </NewComment>
        </Container>
    )
}

export default Comments