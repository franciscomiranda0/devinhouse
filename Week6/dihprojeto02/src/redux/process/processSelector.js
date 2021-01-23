import { EMPTY_PROCESS } from '../../utils/constants';

export const getDetailingEntry = store => store.processReducer.detailingEntry || {};
export const getListingData = store => store.processReducer.processList;
export const getProcessEntry = store => store.processReducer.processEntry || EMPTY_PROCESS;
export const getProcessEntryId = store => store.processReducer.processEntryId;
export const getShowDetailingEntry = store => store.processReducer.showDetailingEntry;
export const getShowEntryDialog = store => store.processReducer.showEntryDialog;