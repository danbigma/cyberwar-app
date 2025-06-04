# cyberwar-app

## Backend location

The backend source has been moved to the `backend/` directory.

### Running in development

Install dependencies and start the server with nodemon:

```bash
npm install --prefix backend
npm run dev --prefix backend
```

### Building and running in production

```bash
npm run build --prefix backend
npm run start:prod --prefix backend
```

### Running the full stack

From the repository root you can install dependencies for both the backend and frontend and start them together:

```bash
npm run install:all
npm start
```

The `start` script uses `concurrently` to run the backend in development mode and the React frontend at the same time.
