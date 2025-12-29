fetch('https://YOUR_API_GATEWAY_URL')
  .then(res => res.json())
  .then(data => {
    document.getElementById("count").innerText = data.visits;
  })
  .catch(err => console.log(err));
