const button = document.querySelector('button');
button.addEventListener('click', (event: MouseEvent)) => {
  console.log(`${(event.target as HTMLButtonElement).textContent} is clicked!!`);
}):
