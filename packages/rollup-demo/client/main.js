/**
 * 
 * @param {HTMLElement} container 
 * @param {Object} item 
 * @param {string} item.name
 * @param {string} item.branding
 * @param {Object[]} item.thumbnail
 * @param {string} item.thumbnail[].url
 * @param {string} item.thumbnail[].width
 * @param {string} item.thumbnail[].height
 * @param {string} item.url
 */
function showItem(container, item) {

  const imgEl = container.querySelector('.my-thumb__img');
  const linkEl = container.querySelector('.my-thumb__link');
  const brandEl = container.querySelector('.my-thumb__brand');

  if (item.thumbnail.length > 0) {
    imgEl.src = item.thumbnail[0].url
  }
   
  linkEl.href = item.url;
  linkEl.textContent = item.name;
  brandEl.textContent = item.branding;
}

/**
 * 
 * @param {HTMLElement} container 
 * @param {Object[]} items
 */
function showList(container, items) {
  const elems = container.querySelectorAll('.my-grid__cell');

  const len = Math.min(elems.length, items.length);

  for (let i = 0; i < len; i++) {
    showItem(elems[i], items[i]);
  }
}

function loadAndShow() {
  const url = 'https://api.taboola.com/1.2/json/newsplace-tndemotester/recommendations.get?app.apikey=f44d224ed117102b74bed53b82e6079af28600d5&app.type=mobile&source.type=home&source.id=%2F&source.url=http%3A%2F%2Fexample.com&placement.name=Editorial%20Trending&placement.rec-count=100&placement.organic-type=mix&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init';

  fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`Error ${resp.status} ${resp.statusText}`);
      }

      return resp.json();
    })
    .then((data) => {
      if (!data.list) {
        return;
      }
      showList(document.querySelector('.my-grid'), data.list);
    })
    .catch((e) => {
      alert(e.message);
    });
}

loadAndShow();
