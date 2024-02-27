function jsonp() {
  fetch('http://localhost:3000/cats')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
}

const btn = document.getElementById('jsonp');
btn.addEventListener('click', () => {
  jsonp();
});
