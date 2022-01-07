import styled from "styled-components";
import Theme from "../../../utils/constants/ThemeConstants";

export const NavBar = styled.nav`
    background-color: ${Theme.colors.navBarBackground};
    height: 60px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    height: 21px;
    width: 90px;
`;