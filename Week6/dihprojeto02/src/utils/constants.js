export const EMPTY_PROCESS = {
    processName: '',
    processSubject: '',
    processDescription: '',
    processConcerns: [],
};

export const INITIAL_STATE = {
    detailingEntry: EMPTY_PROCESS,
    processEntry: EMPTY_PROCESS,
    processEntryId: 0,
    processList: [],
    showDetailingEntry: false,
    showEntryDialog: false
};