fetch('http://api.brewerydb.com/v2/beers?styleId=1&key=32634c3f47e5a5d8796b2630bec3e527')
.then(res => res.json())
.then(data => console.log(data))
