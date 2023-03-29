import React from "react"
import styled from "styled-components"

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme})=> theme.bgLighter};
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

const Navbar = () => {

    return(
        <>
        <Container>
            <Wrapper>
                <Search>
                    <Input />
                    <SearchOutlinedIcon />
                </Search>
                <LoginButton> <AccountCircleOutlinedIcon /> SIGN IN </LoginButton>
            </Wrapper>
        </Container>
        </>
    )

}

export default Navbar