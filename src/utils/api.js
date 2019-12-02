/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */


export function uploadReport() {
  let formData = new FormData()
  formData.append('photo', picture)
  formData.append('title',title)
  formData.append('subtitle',subtitle)
  formData.append('userId',_id)

  fetch(API_URL+'/upload_post', { // Your POST endpoint
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
