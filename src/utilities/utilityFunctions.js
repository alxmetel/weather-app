export const formatDate = timestamp => {
  const date = new Date(timestamp * 1000);
  const options = {
    weekday: 'short'
  }
  return new Intl.DateTimeFormat('en-US', options).format(date);
}