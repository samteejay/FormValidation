

<!DOCTYPE html>
<html>
<head>
<title>form validation1</title>
</head>

<body>

  <form onSubmit="return checkForLastName();">
    Please enter your zip code.<br>
    <input type="text" id="lastNameField">
    <input type="submit" value="Submit Form">
  </form>

<script>

function checkForLastName() {
  var targetField = document.getElementById("lastNameField");
  var numChar = targetField.value;
  var numChars = numChar.length;
  if (numChars === 0 || numChars < 5) {
    alert("Please enter a 5-digit code.");
	targetField.focus();
	targetField.style.background = "yellow";
	return false;
  }
  
  for (var i = 0; i <= 4; i++) {
    var thisChar = parseInt(numChar[i]);
	if (isNaN(thisChar)) {
	  alert("Please enter only numbers.");
	  targetField.focus();
	  targetField.style.background = "yellow";
	  return false;
	}
  }
  targetField.style.background = "white";
}

</script>

</body>
</html>