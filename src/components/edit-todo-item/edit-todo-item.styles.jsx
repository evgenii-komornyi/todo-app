import styled, { css } from 'styled-components';

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

export const EditTodosContainer = styled.div`
    display: flex;
    justify-content: center;

    form {
        width: 100%;
    }

    .todo-input {
        min-width: 15rem;
        ${forInputs}
        align-self: center;
    }
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
