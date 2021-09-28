

export function Filter(Ident) {
  // Get the checkbox
  const checkBox = document.getElementById(Ident);
  // Get the output text
  const text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

export default Filter;