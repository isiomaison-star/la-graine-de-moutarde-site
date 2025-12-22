
document.getElementById('year').textContent = new Date().getFullYear();

async function loadMenu() {
  try {
    const res = await fetch('data/menu.json');
    const data = await res.json();
    const container = document.getElementById('menu-container');
    data.categories.forEach(cat => {
      const section = document.createElement('div');
      section.className = 'menu-category';
      section.innerHTML = `<h3>${cat.name}</h3>`;
      cat.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">${item.price.toLocaleString('fr-FR')} FCFA</p>
        `;
        section.appendChild(div);
      });
      container.appendChild(section);
    });
  } catch (e) {
    console.error(e);
  }
}
loadMenu();
