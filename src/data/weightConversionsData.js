const weightConversions = {
  gold: {
    platinum: 1.66,
    silver: 0.9,
    wax: 0.071,
  },
  platinum: {
    gold: 0.6,
    silver: 0.48,
    wax: 0.049,
  },
  silver: {
    gold: 1.11,
    platinum: 2.06,
    wax: 0.097,
  },
  wax: {
    gold: 14.1,
    platinum: 20.6,
    silver: 10.3,
  },
};

export default weightConversions;
