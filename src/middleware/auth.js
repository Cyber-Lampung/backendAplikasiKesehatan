const auth = async (req, res, next) => {
  // code
  const header = req.headers.barer;

  if (!header) {
    return res.status(401).send({ invalid: true, status: 401 });
  }

  next();
};

export default auth;
