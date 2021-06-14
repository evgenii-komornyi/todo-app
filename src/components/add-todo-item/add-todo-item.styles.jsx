import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const inputs_bg_color = '#e1ebfd';
const forInputs = css`
    width: 100%;
    max-height: 2.5rem;
    background-color: ${inputs_bg_color};
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
`;

const isAlways = (isAlways) => {
    return isAlways
        ? css`
              display: none;
          `
        : css`
              display: block;
          `;
};

export const AddMotionButton = styled(motion.button)`
    margin-left: auto;
    margin-right: auto;
    background-color: #271c6c;
    color: #e1ebfd;
    border-radius: 50%;
    border: 2px solid #e1ebfd;
    font-size: 1.5rem;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    box-shadow: 2px 4px 10px #271c6c;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
        outline: none;
    }
`;

export const AddTodosContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const FormContainer = styled.form`
    width: 100%;
`;

export const InputContainer = styled.input`
    min-width: 15rem;
    ${forInputs}
    align-self: center;

    &:focus {
        outline: none;
        border: 2px solid rgb(67, 58, 168);
    }
`;

export const DateTimePickerContainer = styled.div`
    margin-top: 10px;
    background-color: transparent;

    ${(props) => isAlways(props.isAlways)}
`;

export const CheckBoxContainer = styled.div`
    margin-top: 10px;

    input {
        margin-left: 30px;
    }

    #withoutTime,
    label[for='withoutTime'] {
        ${(props) =>
            props.isAlways
                ? css`
                      display: none;
                  `
                : css`
                      display: inline;
                  `}
    }

    label {
        margin-left: 5px;
    }
`;
