const toggler = document.querySelectorAll('.toggle');

toggler.forEach((button) => {
  button.onclick = (e) => {
    // console.log(button);
    const target = document.getElementById(button.dataset.pop);
    target.classList.toggle('none');
  };
});
