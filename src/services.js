async function loadServices() {
  const response = await fetch("sections.json");
  const data = await response.json();

  const container = document.getElementById("container");
  const host = window.location.hostname;
  const protocol = window.location.protocol;

  // page title
  const h1 = document.createElement("h1");
  // h1.textContent = `${protocol}//${host}`; // include protocol
  h1.textContent = host;
  container.appendChild(h1);

  // build all sections
  for (const [category, items] of Object.entries(data)) {

    // section title
    const h2 = document.createElement("h2");
    h2.textContent = category;
    container.appendChild(h2);

    // create list element
    const ul = document.createElement("ul");

    // fill section items
    for (const [name, dest] of Object.entries(items)) {
      const li = document.createElement("li");
      const url = `${protocol}//${host}:${dest[1]}`;
      li.innerHTML = `<a href="${url}">${name}</a>`;
      ul.appendChild(li);
    }

    container.appendChild(ul);
  }
}

loadServices();
