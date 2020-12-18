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

            this.get('/student', ({ db }) => { console.log(db.students); return db.students; });
            this.delete('/student/:id', (schema, request) =>
                schema.db.students.remove(request.params.id)
            )
        }
    })
    console.log(API_URL, STUDENT_API, environment, server);
    return server;
}