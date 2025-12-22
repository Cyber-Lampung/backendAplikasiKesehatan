const validasiInputan = (email, username, password) => {
  const regex = /[-,#,$,!,*,%;]/;

  const EmailCheck = regex.test(email);
  const UsernameCheck = regex.test(username);
  const PasswordCheck = regex.test(password);

  if (EmailCheck || UsernameCheck || PasswordCheck) {
    return true;
  } else {
    return false;
  }
};

export default validasiInputan;
