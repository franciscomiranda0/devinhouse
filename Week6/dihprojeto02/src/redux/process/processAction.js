import { processType } from './processType';

export const asyncDelete = processId => {
    return {
        type: processType.ASYNC_DELETE,
        payload: {
            processId
        }
    };
};

export const asyncInsert = process => {
    return {
        type: processType.ASYNC_INSERT,
        payload: {
            process
        }
    };
};

export const asyncLoadAll = () => {
    return {
        type: processType.ASYNC_LOAD_ALL
    };
};

export const asyncLoadOne = processEntryId => {
    return {
        type: processType.ASYNC_LOAD_ONE,
        payload: {
            processEntryId
        }
    };
};

export const asyncLoadQuery = query => {
    return {
        type: processType.ASYNC_LOAD_QUERY,
        payload: {
            query
        }
    };
};

export const asyncUpdate = process => {
    return {
        type: processType.ASYNC_UPDATE,
        payload: {
            process
        }
    };
};


export const processEntryConcernsAddition = value => {
    return {
        type: processType.PROCESS_ENTRY_CONCERNS_ADDITION,
        payload: {
            value
        }
    };
};

export const setDetailingOptions = (process, flag) => {
    return {
        type: processType.SET_DETAILING_OPTIONS,
        payload: {
            process,
            flag
        }
    };
};

export const processEntryPropertyChange = (property, value) => {
    return {
        type: processType.PROCESS_ENTRY_PROPERTY_CHANGE,
        payload: {
            property,
            value
        }
    };
};

export const setEntryDialogOptions = (flag, processEntryId) => {
    return {
        type: processType.SET_ENTRY_DIALOG_OPTIONS,
        payload: {
            flag,
            processEntryId
        }
    };
};