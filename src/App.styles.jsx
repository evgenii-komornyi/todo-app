import styled from 'styled-components';

export const AppContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;

    h1 {
        display: inline;
        text-align: center;
        margin-bottom: 2rem;
        color: #e1ebfd;

        text-shadow: 0 0 5px #433aa8, 3px -1px 5px #271c6c;
    }

    .modal .modal-content {
        background: linear-gradient(
            190deg,
            rgb(9, 90, 171) 0%,
            rgb(0, 0, 0) 100%
        );
        color: #fff;
    }

    button.close {
        background-color: transparent;
        padding: 4px 10px;
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
    }
`;
