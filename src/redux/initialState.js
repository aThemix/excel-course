import {storage} from '@core/untils';
import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
    title: defaultTitle,
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles
}

const normolize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})

export const initialState = storage('excel-state')
    ? normolize(storage('excel-state'))
    : defaultState
