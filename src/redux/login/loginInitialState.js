// import { STATUS } from 'constanse/status';

import { STATUS } from "constanse/status";

export const loginInitialState = {
  token: '',
  user: {
    name: '',
    email: '',
    },
  status: STATUS.Idle,
};
