const previewEl = document.querySelector<HTMLElement>('.preview');

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

    previewEl?.append(handleFiles(files))

  }, false);
}

handleSelectFile();
dragAndDrop();
