import { API_URL } from './API';
import { createServer, Model } from 'miragejs';
import { initialDatabase } from '../utils/db';

export function buildServer({ environment = 'development' } = {}) {
    const server = createServer({
        environment,
        models: {
            process: Model
        },
        seeds(server) {
            server.db.loadData({
                processes: initialDatabase
            });
        },
        routes() {
            this.namespace = API_URL;
            this.post('/process', (schema, request) =>
                schema.db.processes
                    .insert(JSON.parse(request.requestBody))
            );
            this.get('/process', ({ db }) =>
                db.processes
            );
            this.get('/process/:id', ({ db }, request) => {
                return db.processes
                    .find(request.params.id);
            });
            this.get('/process/q/:q', (schema, request) => {
                const filter = request.params.q;
                return schema.processes
                    .where(process =>
                        process.processName.includes(filter) ||
                        process.processSubject.includes(filter))
                    .models;
            });
            this.put('/process', (schema, request) =>
                schema.processes
                    .create(JSON.parse(request.requestBody))
            );
            this.delete('/process/:id', (schema, request) => {
                return schema.db.processes
                    .remove(request.params.id)
            }
            );
        }
    });
    return server;
};