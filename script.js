function showLanterns() {
  const canvas = document.getElementById('lantern-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const lanternImage = new Image();
  lanternImage.src = 'img/lantern1.png'; // Replace with your lantern image URL

  const lanterns = [];

  function createLantern() {
    const lantern = {
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: Math.random() * 40 + 30,
      speed: Math.random() * 2 + 1,
    };
    lanterns.push(lantern);
  }

  function drawLanterns() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lanterns.forEach((lantern, index) => {
      ctx.drawImage(lanternImage, lantern.x, lantern.y, lantern.size, lantern.size);

      lantern.y -= lantern.speed;
      if (lantern.y + lantern.size < 0) {
        lanterns.splice(index, 1);
        createLantern();
      }
    });

    requestAnimationFrame(drawLanterns);
  }

  for (let i = 0; i < 20; i++) {
    createLantern();
  }

  lanternImage.onload = drawLanterns;
}

let currentPage = 1;

function nextPage() {
  if (currentPage < 12) {
    document.getElementById(`page${currentPage}`).style.transform = 'rotateY(-180deg)';
    currentPage++;
    document.getElementById(`page${currentPage}`).style.transform = 'rotateY(0deg)';
  }
}

function prevPage() {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).style.transform = 'rotateY(-180deg)';
    currentPage--;
    document.getElementById(`page${currentPage}`).style.transform = 'rotateY(0deg)';
  }
}
