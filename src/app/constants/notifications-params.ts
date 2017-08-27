import { INotificationsParams } from 'app/models';

export const START: INotificationsParams = {
  options: {
    body: `It's time to work`,
  },
  title: `Let's work`,
};

export const LONG_BREAK: INotificationsParams = {
  options: {
    body: `It's time to a long relax`,
  },
  title: `Let's take a long break`,
};

export const SHORT_BREAK: INotificationsParams = {
  options: {
    body: `It's time to a short break`,
  },
  title: `Let's take a short break`,
};
