import styled from "styled-components";
import Theme from "../../../../../core/utils/constants/ThemeConstants";

export const Main = styled.main`
    height: calc(100vh - 60px);
    width: 100%;
    background-color: ${Theme.colors.headerBackground};
    padding: 47px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Loading = styled.div`
    padding: 5px 15px;
    border-radius: 3px;
    background-color: ${Theme.colors.light};
    transform: translateY(-10px);
    box-shadow: 0px 2px 10px 2px ${Theme.colors.headerBackground};
`;

export const ErrorCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 3px;
    background-color: ${Theme.colors.light};
    box-shadow: 0px 2px 10px 2px ${Theme.colors.headerBackground};
` as any;

ErrorCard.TryAgainButton = styled.button`
    margin-top: 20px;
    outline: none;
    border: none;
    background-color: ${Theme.colors.moovinGreen};
    color: ${Theme.colors.light};
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
`;