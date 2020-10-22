const express = require('express');
const app = express();

app.use(express.static('public'));

console.log(' -> Fragment server running on http://localhost:8081');
console.log('      /header.html');
console.log('      /footer.html');

app.listen(process.env.PORT || 8081, () => {
  console.log(' -> Layout Service running on localhost:8081');
});
