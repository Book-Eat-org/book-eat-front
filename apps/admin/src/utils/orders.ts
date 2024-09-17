export const getLeftTimeLabel = (timesInMs: number) => {
  const seconds = Math.floor(timesInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 1) {
    return `${days}д`;
  }

  if (hours >= 1) {
    return `${hours}ч`;
  }

  return `${minutes}м`;
};
