const date = new Date();
const day = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();
const dateString = `${day} ${month} ${year}`;

export default dateString;