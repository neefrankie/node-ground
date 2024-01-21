function startLogin(formData: FormData) {

  fetch('/api/login', {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    })
    .then(resp => {
      if (!resp.ok) {
        return new Error(`HTTP error! Status: ${resp.status}`);
      }

      // Redirect user after login succeed.
      if (resp.redirected) {
        window.location.href = resp.url;
      }
    })
    .catch(err => {
      console.error(`Error: ${err}`);
    });
}

function handleLogin() {
  const formEl = document.getElementById('loginForm') as HTMLFormElement;

  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submitting...');
    
    const formData = new FormData(formEl);

    for (const [key, value] of formData) {
      console.log(`key: ${key}, value: ${value}`);
    }

    startLogin(formData);
  });
}

handleLogin()
