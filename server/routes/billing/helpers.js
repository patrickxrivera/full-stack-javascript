import { default as stripeAPI } from 'stripe';

import keys from '../../config/keys';

const stripe = stripeAPI(keys.stripeSecretKey);

const fiveDollars = 100 * 5; // === 500 pennies || $5

export const getChargeConfig = (req) => ({
  amount: fiveDollars,
  currency: 'usd',
  description: '$5 for 5 credits',
  source: req.body.id
});

export const createCharge = (chargeConfig) =>
  stripe.charges.create(chargeConfig);
