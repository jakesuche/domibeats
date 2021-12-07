export const Moods = [
  {
    label: "Adored",
    value: "adored",
  },
  {
    label: "Bouncy",
    value: "bouncy",
  },
  {
    label: "Calm",
    value: "calm",
  },
  {
    label: "Confident",
    value: "confident",
  },
  {
    label: "Angry",
    value: "angry",
  },
  {
    label: "Annoyed",
    value: "annoyed",
  },
  {
    label: "Adored",
    value: "adored",
  },
  {
    label: "Depressed",
    value: "depressed",
  },
  {
    label: "Disappointed",
    value: "disappointed",
  },
  {
    label: "Dirty",
    value: "dirty",
  },
];

export const BPM = [...Array(137).keys()].map((_, i) => {
  return {
    value: _ + 64,
    label: _ + 64,
  };
});

export const Genres = [
  {
    value: "afrobeat",
    label: "Afrobeat",
  },
  {
    value: "dance hall",
    label: "Dance hall",
  },
  {
    value: "hip hop",
    label: "Hip hop",
  },
  {
    value: "gospel",
    label: "Gospel",
  },
  {
    value: "r and b",
    label: "R and B",
  },
];
