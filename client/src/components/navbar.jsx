import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

import { useSelector } from "react-redux";


const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 56px;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding:0px 20px;
`

const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 3px;

`

const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
`

const LoginButton = styled.button`
    display: flex;
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    gap: 5px;
`

const User = styled.div`

    display:flex;
    align-items: center;
    gap:10px;
    font-weight:500;
    color: ${({theme})=>theme.text}
`

const Avatar = styled.img`

    width:32px;
    height:32px;
    border-radius:50%;
    background-color:#999;
`

const Navbar = () => {

    const { currentUser } = useSelector((state) => state.user)

    const [open,setOpen] = useState(false)


    return (
        <>
            <Container>
                <Wrapper>
                    <Search>
                        <Input />
                        <SearchOutlinedIcon />
                    </Search>
                    <Link to="signin" style={{ textDecoration: "none" }}>
                        {currentUser ? (
                            <User>
                                <VideoCallOutlinedIcon onClick={()=>setOpen(true)} />
                                <Avatar src={currentUser.img} />
                                {currentUser.name}
                            </User>
                        ) : (
                            <LoginButton>
                                <AccountCircleOutlinedIcon />
                                SIGN IN
                            </LoginButton>
                        )}
                    </Link>
                </Wrapper>
            </Container>
        </>
    )

}

export default Navbar