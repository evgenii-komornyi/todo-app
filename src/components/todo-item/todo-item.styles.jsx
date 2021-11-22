import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { getMonthName } from '../../helpers/dateHelper';

const checkDateTime = (date = null, time = null, completed) => {
    const today = new Date();

    const eventDate = new Date(
        `${date && date.year}-${date && getMonthName(date.month)}-${
            date && date.day
        }, ${time !== null ? time.hours : '23'}:${
            time !== null ? time.minutes : '59'
        }`
    );

    const diffTime = Math.abs(today - eventDate);
    const diffDays = Math.ceil(diffTime / (36e5 * 24));

    if (today >= eventDate && !completed) {
        return css`
            background-color: #f81d1d;
            color: #ffffff;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            font-weight: bolder;
        `;
    } else if (diffDays <= 3 && !completed) {
        return css`
            background-color: #eaa913;
            color: #ffffff;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            font-weight: bold;
        `;
    } else {
        return css`
            border: ${date !== null ? '1px solid #000' : 'none'};
            border-radius: 10px;
        `;
    }
};

export const CardMotionLiContainer = styled(motion.li)`
    display: flex;
    flex-direction: column;
    background: rgb(180, 182, 218);
    background: radial-gradient(
        circle,
        hsla(237, 34%, 78%, 0.9) 0%,
        hsla(219, 88%, 94%, 0.9) 100%
    );
    margin: 0 1rem 1rem 0;
    height: auto;
    width: 18rem;
    border-radius: 0.5rem;
    padding: 1rem;
    position: relative;

    @media Screen and (max-width: 640px) {
        margin-right: 0;
    }
`;

export const ItemTitleContainer = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const ItemDateTimeContainer = styled.div`
    padding: 10px;
    ${(props) =>
        checkDateTime(
            props.item.eventDate,
            props.item.eventTime,
            props.item.completed
        )};
`;

export const ItemDateContainer = styled.div``;

export const ItemTimeContainer = styled.div``;

export const ActionsContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 0;

    button {
        border-radius: 20%;
        border: none;
        margin: 0 0.6rem;
        font-size: 1.4rem;
        cursor: pointer;
        background-color: transparent;

        &:focus {
            outline: none;
        }
    }
`;

export const EditMotionButton = styled(motion.button)`
    color: orangered !important;
`;

export const CompleteMotionButton = styled(motion.button)`
    color: green !important;
`;

export const RemoveMotionButton = styled(motion.button)`
    color: red !important;
`;

export const CompletedItemContainer = styled.span`
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    background-color: #867bcd;
    border: 2px solid #272727;
    color: #e1ebfd;
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
    border-radius: 20px;
`;

export const CreatedDateContainer = styled.div`
    margin-top: 30px;
    font-size: 10px;
`;

export const CompletedDateContainer = styled.div`
    margin-top: 5px;
    font-size: 10px;
    color: green;
`;
