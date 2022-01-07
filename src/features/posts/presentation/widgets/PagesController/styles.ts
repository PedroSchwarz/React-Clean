import styled from "styled-components";
import Theme from "../../../../../core/utils/constants/ThemeConstants";

export const Controller = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

type PageIndicatorProps = {
    active: boolean;
}

export const PageIndicator = styled.div<PageIndicatorProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    border: ${({ active }) => active ? `2px solid ${Theme.colors.pageIndicatorBorder}` : 'none' };
    border-radius: ${({ active }) => active ? '3px' : '0' };
    margin: 0 5px;

    .indicator {
        font-size: 15px;
        line-height: 40px;
        font-weight: 800;
        color: ${Theme.colors.postItemContent};
    }
`;

export const ArrowButton = styled.button`
    cursor: pointer;
    padding: 5px;
    background-color: transparent;
    outline: none;
    border: none;
    margin: 0 5px;
    
    svg {
        fill: ${Theme.colors.postItemContent};
    }

    &:disabled {
        svg {
            fill: ${Theme.colors.pageIndicatorBorder};
        }
    }
`;