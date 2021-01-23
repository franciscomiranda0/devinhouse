import ProcessService from '../services/ProcessService.js';

export const getName = () => {
    const prefix = 'SOFT';
    const index = Array.of(ProcessService.readProcesses()).length;
    const year = new Date().getFullYear();
    const finalName = `${prefix} ${index}/${year}`;
    return finalName;
}