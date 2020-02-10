

<!DOCTYPE html>
<html>
<head>
<title>form validation4</title>
</head>

<body>

  <form onSubmit="return validateEmail();">
    Please enter email address.<br>
    <input type="text" id="email">
    <input type="submit" value="Submit Form">
  </form>

<script>

function validateEmail() {
  var addressIsLegal = true;
  var eEntered = document.getElementById("email").value;
  if (eEntered.indexOf(" ") !== -1) {
    addressIsLegal = false;
  }
  if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
    addressIsLegal = false;
  }
  if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) {
    addressIsLegal = false;
  }
  if (addressIsLegal === false) {
    alert("Please correct email address");
	return false;
  }
}

</script>

</body>
</html>