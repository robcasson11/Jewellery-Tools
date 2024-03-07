const weightConversions = {
  gold: {
    plat: 1.66,
    sil: 0.9,
    wax: 0.071,
  },
  platinum: {
    gold: 0.6,
    sil: 0.48,
    wax: 0.049,
  },
  silver: {
    gold: 1.11,
    plat: 2.06,
    wax: 0.097,
  },
  wax: {
    gold: 14.1,
    plat: 20.6,
    sil: 10.3,
  },
};

export default weightConversions;
