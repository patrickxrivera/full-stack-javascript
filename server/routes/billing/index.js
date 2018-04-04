import compose from 'lodash/fp/compose';

import requireLogin from '../../middlewares/requireLogin';
import { createCharge, getChargeConfig } from './helpers';

const chargeUser = compose(createCharge, getChargeConfig);

const initBillingRoutes = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await chargeUser(req);

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};

export default initBillingRoutes;
