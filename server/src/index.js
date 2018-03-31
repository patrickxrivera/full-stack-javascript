import express from 'express';
import passportConfig from './services/passport';
import initAuthRoutes from './routes/auth';

const app = express();

initAuthRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
