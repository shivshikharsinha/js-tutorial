## Project Link

[Click here for Link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project- 1 Color Scheme Switcher

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (buttons) {
  console.log(buttons);
  buttons.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.background = e.target.id;
    }
  });
});
```