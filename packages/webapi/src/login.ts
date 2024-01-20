function createFeedback(msg: string, valid: boolean): HTMLElement {
  const elem = document.createElement('div');
  elem.className = valid ? 'valid-feedback' : 'invalid-feedback';

  const content = document.createTextNode(msg);

  elem.appendChild(content);

  return elem;
}

function insertAfter(newNode: Node, existingNode: Node) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function addFeedback(inputEl: HTMLInputElement, msg: string, valid: boolean) {
  inputEl.classList.remove('is-valid');
  inputEl.classList.remove('is-invalid');
  inputEl.classList.add(valid ? 'is-valid' : 'is-invalid');

  const fbEl = createFeedback(msg, valid);

  insertAfter(inputEl, fbEl)
}

function startLogin(formData: FormData) {

  fetch('/api/login', {
      method: 'POST',
      body: formData,
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
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
