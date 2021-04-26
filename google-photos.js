const axios = require('axios');

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
 const links = new Set()
 console.log("google-photos")
  let match
  while (match = regex.exec(content)) {
    links.add(match[1])
  } 
  return Array.from(links)
}

async function getAlbum(id) {
  const response = await axios.get(`https://photos.app.goo.gl/zse7xeNgXDs8MZnV6`)
  return extractPhotos(response.data)
}


module.exports = {
 getAlbum 
}