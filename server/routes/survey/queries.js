import mongoose from 'mongoose';

const Survey = mongoose.model('surveys');

export const updateDb = ({ surveyId, email, choice }) => {
  Survey.updateOne(
    {
      _id: surveyId,
      recipients: {
        $elemMatch: { email, responded: false }
      }
    },
    {
      $inc: { [choice]: 1 },
      $set: { 'recipients.$.responded': true },
      lastResponded: new Date()
    }
  ).exec();
};
