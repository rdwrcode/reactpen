export default (delay = 100) =>
  new Promise(resolve => setTimeout(resolve, delay));

