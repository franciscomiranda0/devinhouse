import axios from 'axios';
import { PROCESS_API } from './API';

class ProcessService {
    createProcess(process) {
        return axios.post(PROCESS_API, process)
            .then(() => { })
            .catch(err => { throw err });
    };
    readProcess(processId) {
        return axios.get(`${PROCESS_API}/${processId}`)
            .then(response => response)
            .catch(err => { throw err });
    };
    readProcesses() {
        return axios.get(PROCESS_API)
            .then(response => response)
            .catch(err => { throw err });
    };
    readQuery(query) {
        console.log(query);
        return axios.get(`${PROCESS_API}/q/${query}`)
            .then(response => response)
            .catch(err => { throw err });
    }
    updateProcess(process) {
        return axios.put(PROCESS_API, process)
            .then(response => response)
            .catch(err => { throw err });
    };
    deleteProcess(id) {
        return axios.delete(`${PROCESS_API}/${id}`)
            .then(() => { })
            .catch(err => { throw err });
    };
};

export default new ProcessService();