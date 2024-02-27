const jsonHeader = {
  'Content-Type': 'application/json; charset=utf-8'
};

function sendJSON(formData: FormData, toUrl: string) {

  const body = JSON.stringify(Object.fromEntries(formData.entries()));
  console.log(body);

  fetch(toUrl, {
      method: 'POST',
      body: body,
      redirect: 'follow',
      headers: jsonHeader,
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

function handleForm(formId: string) {
  const formEl = document.getElementById(formId) as HTMLFormElement;
  if (!formEl) {
    console.error('form ' + formId + ' not found');
    return;
  }

  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submitting...');
    
    const formData = new FormData(formEl);

    for (const [key, value] of formData) {
      console.log(`key: ${key}, value: ${value}`);
    }

    sendJSON(formData, formEl.action);
  });
}

handleForm("loginForm");
handleForm('signUpForm');
