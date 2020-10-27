function previewImage() {
  let preview = document.querySelector("#preview")
  let file = document.querySelector("#file").files[0]
  let reader = new FileReader()

  reader.onload = () => {
    preview.src = reader.result
  }

  if (file) reader.readAsDataURL(file)
  else preview.src = ""
}