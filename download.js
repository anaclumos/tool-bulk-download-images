async function downloadImage(imageSrc, id) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)
  const link = document.createElement('a')
  link.href = imageURL
  link.download = id
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

for (var i = 0; i < 150; i++) {
  delay(i)
}

function delay(i) {
  setTimeout(() => {
    downloadImage('https://*URL*/' + i + '.jpg', i)
  }, 1000)
}
