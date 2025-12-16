/* ជ្រើសរើសធាតុមានអាយឌី​ btnApply រួចតាងដោយធាតុអថេរ btnApply */

/* ថែម click event  ឱ្យធាតុអថេរ btnApply*/
const btnApply = document.getElementById("btnApply");

btnApply.addEventListener("click", () => {
  // ជ្រើសធាតុ input ដែល name attribute មានតម្លៃ rdoTheme ហើយត្រូវបានគេ​ checked យក
  const rdoSelected = document.querySelector('input[name="rdoTheme"]:checked');
  if (rdoSelected) {
    document.body.className = "";
    document.body.classList.add(rdoSelected.value);
  } else {
    alert("Please select any theme first!");
  }

  // បើគេបាន checked ជម្រើស silver, blue, orange
  // លុបថ្នាក់នៃការរចនាចាស់នៃធាតុ body
  // យកតម្លៃគេបាន checked ពី radio button មកថែមជាថ្នាក់នៃការរចនាថ្មីនៃធាតុ body
});
