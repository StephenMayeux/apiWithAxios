var camperList = document.getElementById('list');
var newLI;

axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  .then(function(response) {
    console.log('I am from the network response');
    _.each(response.data, function(camper) {
      newLI = document.createElement('li');
      newLI.appendChild(document.createTextNode(camper.username));
      camperList.appendChild(newLI);
    });
  })
  .catch(function(error) {
    console.error(error);
  });

  console.log('I am at the bottom of the file');
