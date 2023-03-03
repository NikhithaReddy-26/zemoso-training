const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }
  
  console.log(getInitials("Roger", "Waters"));