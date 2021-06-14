import { generateDate } from './dateHelper';

const generateID = () => {
    let id = +localStorage.getItem('lastID');

    localStorage.setItem('lastID', id + 1);
    return id;
};

export const createObject = (
    dateTime,
    type,
    isAlways,
    item,
    withoutTime,
    date
) => {
    let object;
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    if (type === 'add') {
        if (isAlways) {
            object = {
                id: generateID(),
                item: item,
                created: generateDate(),
                completed: false,
            };
        } else if (withoutTime) {
            object = {
                id: generateID(),
                item: item,
                eventDate: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                },
                created: generateDate(),
                completed: false,
            };
        } else {
            object = {
                id: generateID(),
                item: item,
                eventDate: {
                    day: dateTime.getDate(),
                    month: dateTime.getMonth(),
                    year: dateTime.getFullYear(),
                },
                eventTime: {
                    hours: hours < 10 ? '0' + hours : hours,
                    minutes: minutes < 10 ? '0' + minutes : minutes,
                },
                created: generateDate(),
                completed: false,
            };
        }
    }

    if (type === 'edit') {
        if (isAlways) {
            object = {
                item: item,
            };
        } else if (withoutTime) {
            object = {
                item: item,
                eventDate: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                },
            };
        } else {
            object = {
                item: item,
                eventDate: {
                    day: dateTime.getDate(),
                    month: dateTime.getMonth(),
                    year: dateTime.getFullYear(),
                },
                eventTime: {
                    hours: hours < 10 ? '0' + hours : hours,
                    minutes: minutes < 10 ? '0' + minutes : minutes,
                },
            };
        }
    }

    return object;
};
