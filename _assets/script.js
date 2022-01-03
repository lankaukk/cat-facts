
fetch('https://cat-fact.herokuapp.com/facts', {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json())
  .then(response => showFacts(response))
  .catch((error) => {
    console.error('Error:', error);
});

showFacts = response => {
  console.log(response)
  const factsList = document.querySelector('#factsList')
  response.forEach(fact => {
    const factElement = document.createElement("li");
    factElement.innerText = `${fact.text}`;
    factsList.append(factElement);
  })
}