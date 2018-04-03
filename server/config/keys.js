import devKeys from './dev';
import prodKeys from './prod';

const isProdEnv = () => process.env.NODE_ENV === 'production';

const getKeys = () => (isProdEnv() ? prodKeys : devKeys);

const keys = getKeys();

export default keys;
