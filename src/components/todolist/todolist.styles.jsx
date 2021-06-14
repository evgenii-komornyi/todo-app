import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DisplayTodosContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media Screen and (max-width: 640px) {
        overflow: hidden;
        margin-top: 2rem;
    }
`;

export const ButtonsContainer = styled.div`
    margin-bottom: 2rem;
`;

export const ButtonMotion = styled(motion.button)`
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    border: none;

    &.active {
        background-color: #000;
        color: #fff;
    }

    &:focus {
        outline: none;
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const LengthContainer = styled.div`
    font-size: 10px;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    padding-top: 2px;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-left: 10px;
    position: relative;
    top: -2px;
`;

export const ListContainer = styled.ul`
    list-style: none;
    display: flex;
    align-self: flex-start;
    flex-wrap: wrap;
    margin-left: 5%;

    @media Screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0;
        align-self: center;
    }
`;
