export const formatTime = (durationInSeconds) => {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += `${hours} hrs `;
  }
  if (minutes > 0) {
    formattedTime += `${minutes} min `;
  }
  if (seconds > 0 || formattedTime === '') {
    formattedTime += `${seconds} sec`;
  }

  return formattedTime;
};
