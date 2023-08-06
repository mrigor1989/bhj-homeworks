'use strict'

const progress = document.getElementById('progress')
const url = 'https://students.netoservices.ru/nestjs-backend/upload'
const sendButton = document.getElementById('send')
const file = document.getElementById('file')

const uploadFile = (file) => {
  let xhr = new XMLHttpRequest()
  xhr.upload.onprogress = function (el) {
    progress.value = el.loaded / el.total
  }
  xhr.open('POST', url)
  xhr.send(file)
}

sendButton.addEventListener('click', (event) => {
  event.preventDefault()
  uploadFile(file.files[0])
})