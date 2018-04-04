import mongoose from 'mongoose';

import surveyTemplate from '../../services/emailTemplates/surveyTemplates';
import Mailer from '../../services/Mailer';
import requireLogin from '../../middlewares/requireLogin';
import requireCredits from '../../middlewares/requireCredits';
import { mapRecipients } from './helpers';

const Survey = mongoose.model('surveys');

const initSurveyRoutes = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: mapRecipients(recipients),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};

export default initSurveyRoutes;
