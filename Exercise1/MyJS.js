function checkUser()
{
  let first = document.getElementById('Password').value
  let second = document.getElementById('Re-password').value
  if(first.length < 8 || second.length < 8)
  {
    alert("Password is too short!, it needs to be at least 8 characters ");
  }
  if(first != second)
  {
    alert("Passwords do not match try again!")
  }
}
