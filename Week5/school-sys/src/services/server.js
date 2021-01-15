import { createServer, Model } from 'miragejs';
import { database } from '../data/Database'
import { API_URL, STUDENT_API } from './api'

export function buildServer({ environment = 'development' } = {}) {
    const server = createServer({
        environment,
        models: {
            student: Model
        },
        seeds(server) {
            server.db.loadData({
                students: database
            });
        },
        routes() {
            this.namespace = API_URL;

            this.post('/student', (schema, request) =>
                schema.db.students
                    .insert(JSON.parse(request.requestBody))
            );

            this.get('/student', ({ db }) =>
                db.students
            );

            this.put('/student', (schema, request) =>
                schema.students.create(JSON.parse(request.requestBody))
            )

            this.delete('/student/:id', (schema, request) =>
                schema.db.students
                    .remove(request.params.id)
            );
        }
    })
    return server;
}