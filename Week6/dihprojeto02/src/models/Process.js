import { getName } from '../utils/ProcessNaming';

class Process {
    constructor(
        processName = '',
        processSubject = '',
        processDescription = '',
        processConcerns = []
    ) {
        this.processId = (Math.random() * 10000 + (10000 - 1000)).toFixed();
        this.processName = processName;
        this.processSubject = processSubject;
        this.processDescription = processDescription;
        this.processConcerns = processConcerns;
        this.processDate = new Date();
    }
    static newProcess(process) {
        return new Process(
            getName(),
            process.processSubject,
            process.processDescription,
            process.processConcerns)
    }
}

export default Process;