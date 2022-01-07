import styled from "styled-components";
import Theme from "../../../../../core/utils/constants/ThemeConstants";

export const Item = styled.div`
    display: grid;
    grid-template-columns: 20vw auto;
    padding: 10px 30px;
    border-bottom: 2px solid ${Theme.colors.listBorder};

    &:last-child {
        border-bottom: none;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 40px;
        color: ${Theme.colors.postItemContent};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-right: 20px;
    }

    span {
        display: none;
    }

    @media screen and (max-width: ${Theme.sizes.mobile}px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;

        p {
            text-overflow: none;
            overflow: hidden;
            white-space: normal;
        }

        span {
            display: inline;
            font-weight: 700;
            font-size: 15px;
            color: ${Theme.colors.headerTitle};
            line-height: 40px;
        }
    }
`;