const navigate = (url) => {
  window.location.href = url;
};

const getLocation = () => window.location.href;

export {navigate, getLocation};
