export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const now = new Date(); // Current date and time

  const isToday = date.toDateString() === now.toDateString();
  const isTomorrow =
    new Date(date.getTime() - 24 * 60 * 60 * 1000).toDateString() ===
    now.toDateString();

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  if (isToday) {
    return `Today, ${date.toLocaleTimeString(undefined, options)}`;
  } else if (isTomorrow) {
    return `Tomorrow, ${date.toLocaleTimeString(undefined, options)}`;
  } else {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    }, ${date.toLocaleTimeString('en-US', options)}`;
    return formattedDate;
  }
};
