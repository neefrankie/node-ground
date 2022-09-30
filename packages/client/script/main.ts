import { AJAX } from './ajax';
import { Progress } from './progress';

const progress = new Progress('.progress .progress-bar');

const previewEl = document.querySelector<HTMLElement>('.preview');
const galleryEl = document.getElementById('gallery');

function cleanChild(el: HTMLElement) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function returnFileSize(size: number): string {
  if (size < 1024) {
    return `${size}bytes`;
  } else if (size >= 1024 && size < 1048576) {
    return `${(size/1024).toFixed(1)}KB`;
  } else {
    return `${(size/1048576).toFixed(1)}MB`;
  }
}

function handleSelectFile() {
  const inputEl = document.querySelector<HTMLInputElement>('#formFile');
  
  inputEl?.addEventListener('change', () => {
  
    if (previewEl) {
      cleanChild(previewEl);
    }
  
    const curFiles = inputEl.files;
    if (!curFiles) {
      return
    }
  
    previewEl?.append(handleFiles(curFiles));
  });
}

function handleFiles(files: FileList): HTMLOListElement {
  const list = document.createElement('ol');

  for (const file of files) {
    const listItem = document.createElement('li');
    const para = document.createElement('p');
    para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
    
    listItem.appendChild(para);
    list.appendChild(listItem);
  }

  return list;
}

function handleSubmit() {
  const form = document.getElementById('fileForm');
  const inputEl = document.querySelector<HTMLInputElement>('#formFile');


  progress.reset();

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const files = inputEl?.files;
    if (!files) {
      return;
    }

    if (files.length === 0) {
      return;
    }

    const file = files[0];

    const formData = new FormData();
    formData.append('apk', file, file.name);

    console.log(formData);

    const ajax = new AJAX();

    ajax.put('/upload')
      .onProgress((e) => {
        if (e.lengthComputable) {
          const percentComplete = e.loaded / e.total * 100;
          progress.update(percentComplete);
        }
      })
      .onComplete(resp => {
        console.log('Upload completed');
        console.log(resp.body);
        console.log(resp.statusCode);
      })
      .onError(resp => {
        console.log(`Error: ${resp.statusCode}, ${resp.statusText}`);
      })
      .upload(formData);
  });
}

function dragAndDrop() {
  const dropboxEl = document.getElementById('dropbox');
  
  dropboxEl?.addEventListener('dragenter', (e) => {
    e.stopPropagation();
    e.preventDefault();
  }, false);

  dropboxEl?.addEventListener('dragover', (e) => {
    e.stopPropagation();
    e.preventDefault();
  }, false);

  dropboxEl?.addEventListener('drop', (e) => {
    e.stopPropagation();
    e.preventDefault();

    console.log('Dropping file...');

    if (previewEl) {
      cleanChild(previewEl);
    }
  
    const dt = e.dataTransfer;
    const files = dt?.files;

    if (!files) {
      return;
    }

    galleryEl?.appendChild(handleImages(files));

  }, false);
}

function handleImages(files: FileList): HTMLUListElement {

  const list = document.createElement('ul');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')) {
      continue;
    }
    
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.height = 60;
    img.onload = function() {
      URL.revokeObjectURL(img.src);
    };

    li.appendChild(img);

    const info = document.createElement('span');
    info.innerHTML = `${file.name}: ${file.size} bytes`;

    li.appendChild(info);

    list.appendChild(li);
  }

  return list;
}

handleSelectFile();
handleSubmit();
dragAndDrop();
