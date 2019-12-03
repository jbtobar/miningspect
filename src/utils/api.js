/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import { Platform } from 'react-native'
import { API_URL } from 'src/utils/constants'

export function uploadReport(uploadData,cb) {
  const { photo } = uploadData
  let formData = new FormData()
  // formData.append('photo', picture)
  formData.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });
  // formData.append('photo', {
  //     uri,
  //     name: `photo.${fileType}`,
  //     type: `image/${fileType}`,
  //   });
  formData.append('title','title')
  formData.append('subtitle','subtitle')
  formData.append('userId','_id')

  fetch(API_URL+'/reports/upload', { // Your POST endpoint
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      body: formData
  }).then(
      res => {
        console.warn(res)
        cb({status:res.status == 200?'OK':'err'})
      }
  ).catch(
      error => cb({status:JSON.stringify(error)}) // Handle the error response object
  );
}

/*
function publishPostWithImage(postData,cb = () => {}) {
  const { title, subtitle, picture, post,price } = postData
  const { _id,eth_0 } = store.getState().userData
  // return console.log(store.getState().userData)
  let formData = new FormData()
  formData.append('photo', picture)
  formData.append('title',title)
  formData.append('subtitle',subtitle)
  formData.append('userId',_id)
  formData.append('eth_0',eth_0)
  formData.append('post',post)
  formData.append('price',price)
  fetch(imageUploadUrl, { // Your POST endpoint
      method: 'POST',
      body: formData
  }).then(
      res => {
        console.log(res)
        cb({status:res.status == 200?'OK':'err'})
      }
  ).catch(
      error => cb({status:JSON.stringify(error)}) // Handle the error response object
  );
}
*/
