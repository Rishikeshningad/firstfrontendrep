const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('click');
   // document.getElementById('my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    //ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });

  btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });