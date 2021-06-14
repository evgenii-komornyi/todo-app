import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { DateTimePicker, DatePicker } from 'react-rainbow-components';

import {
    ModalTodosContainer,
    FormContainer,
    InputContainer,
    CheckBoxContainer,
    DateTimePickerContainer,
} from './modal.styles';

import { createObject } from '../../helpers/createObjectHelper';
import { getMonthName } from '../../helpers/dateHelper';

const ModalFun = ({ isOpen, toggle, type, todo = null, action }) => {
    const [item, setItem] = useState(todo === null ? '' : todo.item);
    const [dateTime, setDateTime] = useState(new Date());
    const [date, setDate] = useState(new Date());

    const [isAlways, setIsAlways] = useState(
        todo === null ? false : !todo.eventDate
    );
    const [withoutTime, setWithoutTime] = useState(
        todo === null ? false : !todo.eventTime
    );

    useEffect(() => {
        item.eventDate &&
            item.eventTime &&
            setDateTime(
                new Date(
                    `${item.eventDate && item.eventDate.year}-${
                        item.eventDate && getMonthName(item.eventDate.month)
                    }-${item.eventDate && item.eventDate.day}, ${
                        item.eventTime && item.eventTime.hours
                    }:${item.eventTime && item.eventTime.minutes}`
                )
            );
        item.eventDate &&
            setDate(
                `${item.eventDate && item.eventDate.year}-${
                    item.eventDate && item.eventDate.month + 1
                }-${item.eventDate && item.eventDate.day}, 00:00`
            );
    }, [item.eventDate, item.eventTime]);

    const handleIsAlwaysClick = () => {
        setIsAlways(!isAlways);
    };

    const handleWithoutTimeClick = () => {
        setWithoutTime(!withoutTime);
    };

    const handleItemChange = (e) => {
        setItem(e.target.value);
    };

    const handleDateTimeChange = (e) => {
        setDateTime(e);
    };

    const handleDateChange = (e) => {
        setDate(e);
    };

    const onClickHandler = (id = null, e) => {
        e.preventDefault();

        if (type === 'add') {
            if (item === '') {
                alert('Input is Empty');
            } else {
                action(
                    createObject(
                        dateTime,
                        type,
                        isAlways,
                        item,
                        withoutTime,
                        date
                    )
                );
                setItem('');
                setIsAlways(false);
                setWithoutTime(false);
            }
        }

        if (type === 'edit') {
            let object = createObject(
                dateTime,
                type,
                isAlways,
                item,
                withoutTime,
                date
            );
            action({ id, object });
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{type} todo</ModalHeader>
                <ModalBody>
                    <ModalTodosContainer>
                        <FormContainer>
                            {type === 'add' ? (
                                <InputContainer
                                    type="text"
                                    onChange={(e) => handleItemChange(e)}
                                    value={item}
                                    placeholder="Todo"
                                />
                            ) : (
                                <InputContainer
                                    type="text"
                                    onChange={(e) => handleItemChange(e)}
                                    defaultValue={item}
                                    value={item}
                                    placeholder="Todo"
                                />
                            )}

                            <CheckBoxContainer isAlways={isAlways}>
                                <input
                                    id="withoutDayTime"
                                    type="checkbox"
                                    checked={isAlways}
                                    onClick={() => handleIsAlwaysClick()}
                                />
                                <label htmlFor="withoutDayTime">Always</label>

                                <input
                                    id="withoutTime"
                                    type="checkbox"
                                    checked={withoutTime}
                                    onClick={() => handleWithoutTimeClick()}
                                />
                                <label
                                    htmlFor="withoutTime"
                                    style={{
                                        textDecoration: withoutTime
                                            ? 'line-through'
                                            : 'none',
                                        color: withoutTime ? 'grey' : 'white',
                                    }}
                                >
                                    Without time
                                </label>
                            </CheckBoxContainer>
                            <DateTimePickerContainer isAlways={isAlways}>
                                {!withoutTime ? (
                                    <DateTimePicker
                                        value={dateTime}
                                        onChange={(e) =>
                                            handleDateTimeChange(e)
                                        }
                                        hour24
                                        formatStyle="large"
                                        placeholder="Date and Time"
                                    />
                                ) : (
                                    <DatePicker
                                        value={date}
                                        onChange={(e) => handleDateChange(e)}
                                        formatStyle="large"
                                        placeholder="Date"
                                    />
                                )}
                            </DateTimePickerContainer>
                        </FormContainer>
                    </ModalTodosContainer>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={(e) =>
                            onClickHandler(type === 'edit' && todo.id, e)
                        }
                    >
                        {type} todo
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ModalFun;
