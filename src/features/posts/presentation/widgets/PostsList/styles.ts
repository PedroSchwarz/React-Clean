import styled from "styled-components";
import Theme from "../../../../../core/utils/constants/ThemeConstants";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: ${Theme.colors.light};
    display: flex;
    flex-direction: column;
    padding: 10px;
` as any;

Card.Title = styled.h1`
    color: ${Theme.colors.title};
    letter-spacing: -0.54px;
    font-size: 18px;
    line-height: 40px;
    font-weight: 600;
    margin: 10px;
`;

export const List = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid ${Theme.colors.listBorder};
    overflow: hidden;   
` as any;

List.Header = styled.div`
    display: grid;
    grid-template-columns: 20vw auto;
    background-color: ${Theme.colors.headerBackground};
    padding: 5px 30px;

    p {
        font-size: 15px;
        color: ${Theme.colors.headerTitle};
        font-weight: 700;
        line-height: 40px;
        margin-right: 20px;
    }

    @media screen and (max-width: ${Theme.sizes.mobile}px) {
        display: none;
    }
`;

List.Body = styled.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${Theme.colors.light};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${Theme.colors.scrollThumb};
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${Theme.colors.scrollThumbHover};
    }
`;

List.Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    border-top: 2px solid ${Theme.colors.listBorder};

    p {
        font-size: 13px;
        line-height: 40px;
        font-weight: 400;
        color: ${Theme.colors.title};
    }

    @media screen and (max-width: ${Theme.sizes.mobile}px) {
        flex-direction: column;
        align-items: center;
    }
`;
