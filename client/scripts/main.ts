const inputEl = document.querySelector<HTMLInputElement>('#formFile');
const previewEl = document.querySelector<HTMLElement>('.preview');

inputEl?.addEventListener('change', () => {
  const curFiles = inputEl.files;
  if (!curFiles) {
    return
  }

  const list = document.createElement('ol');
  previewEl?.append(list);
  
  for (const file of curFiles) {
    const listItem = document.createElement('li');
    const para = document.createElement('p');
    para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
    
    listItem.appendChild(para);
  }
});

function returnFileSize(size: number): string {
  if (size < 1024) {
    return `${size}bytes`;
  } else if (size >= 1024 && size < 1048576) {
    return `${(size/1024).toFixed(1)}KB`;
  } else {
    return `${(size/1048576).toFixed(1)}MB`;
  }

}
