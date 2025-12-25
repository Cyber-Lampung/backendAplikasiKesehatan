const CheckTokenResetPassword = (req, res, next) => {
  // ambil token dari headers

  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "invalid reset password missing token",
      path: "/Login",
    });
  }
  next();
};

export default CheckTokenResetPassword;
