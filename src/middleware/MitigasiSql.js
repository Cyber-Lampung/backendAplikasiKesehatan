const MitigasiSqlCheck = (email, username, password) => {
  const RegexSearch = /[;'",#\/*&^%$!)(,%-]/;

  const checkInput = RegexSearch.test(email);
  const checkInputPassword = RegexSearch.test(password);
  const CheckInputUsername = RegexSearch.test(username);

  if (checkInput || checkInputPassword || CheckInputUsername) {
    return true;
  } else {
    return false;
  }
};

export default MitigasiSqlCheck;
