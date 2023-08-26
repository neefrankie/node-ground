import { getAnchors } from './crawler';

if (require.main == module) {
  getAnchors('https://www.bt-tt.com/html/11/28093.html', '.main .container .bot')
    .then(links => {
      console.log(links);
    })
    .catch(err => {
      console.error(err.message);
    });
}
