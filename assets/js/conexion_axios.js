var boton = document.getElementById('json_get');
var boton_post = document.getElementById('json_post');


boton.addEventListener('click', ()=>{
  loading.style.display = 'block';
  axios.get('http://localhost:5000/user/', {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        console.log(res.data);
        console.log('elemento input:',document.getElementById('email').value)
        mensaje.innerHTML = res.data.data[0].name;
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
});


boton_post.addEventListener('click', async()=> {
  loading.style.display = 'block';
  await axios.post('http://localhost:5000/user/', {
    
      name: document.getElementById('name').value,
      lastName: document.getElementById('lastname').value,
      bornDate: document.getElementById('bornDate').value,
      email:document.getElementById('email'),
      phone:document.getElementById('phone'),
      membership:document.getElementById('membership'),
      fixedTerm:document.getElementById('fixedTerm'),
      paymentForm:document.getElementById('paymentForm')


  })
    .then(function(res) {
      if(res.status==201) {
        mensaje.innerHTML = 'El nuevo Post ha sido almacenado con id: ' + res.data.id;
      }
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
});