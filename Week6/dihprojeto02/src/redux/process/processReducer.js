import { processType } from './processType';
import { EMPTY_PROCESS, INITIAL_STATE } from '../../utils/constants';

export function processReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case processType.ASYNC_LOAD:
            return {
                ...state,
                processList: payload
            };
        case processType.ASYNC_INSERT:
            return {
                ...state,
                processEntry: EMPTY_PROCESS,
            };
        case processType.ASYNC_UPDATE:
            return {
                ...state,
                processEntry: EMPTY_PROCESS,
                processEntryId: 0
            };
        case processType.SET_DETAILING_OPTIONS:
            return {
                ...state,
                detailingEntry: payload.process,
                showDetailingEntry: payload.flag
            };
        case processType.SET_ENTRY_DIALOG_OPTIONS:
            console.log(payload);
            return {
                ...state,
                showEntryDialog: payload.flag,
                processEntryId: payload.processEntryId,
                processEntry: EMPTY_PROCESS
            };
        case processType.PROCESS_ENTRY_PROPERTY_CHANGE:
            return {
                ...state,
                processEntry: {
                    ...state.processEntry,
                    [payload.property]: payload.value
                }
            };
        case processType.PROCESS_ENTRY_CONCERNS_ADDITION:
            return {
                ...state,
                processEntry: {
                    ...state.processEntry,
                    processConcerns: [
                        ...state.processEntry.processConcerns,
                        payload.value
                    ]
                }
            }
        case processType.LOAD_ONE:
            return {
                ...state,
                processEntry: payload.data
            }
    }
    return state;
}