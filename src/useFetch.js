const getFacts = async () => {
  const res = await fetch('http://vindev.cx.ua/dashboard');
  return res.json();
};

export default getFacts;
