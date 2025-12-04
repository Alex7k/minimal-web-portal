const host = window.location.hostname;
const protocol = window.location.protocol;

const media = {
  Jellyfin: 8096,
  Jellyseer: 5055,
  Sonarr: 8989,
  Radarr: 7878,
  Prowlarr: 9696,
  qBitTorrent: 8080,
};

const sensors = {
  Exporter: "9100/metrics",
  Prometheus: 9090,
  Grafana: 3000,
};

function populate(id, items) {
  const ul = document.getElementById(id);
  for (const [name, port] of Object.entries(items)) {
    const url = `${protocol}//${host}:${port}`;
    const li = document.createElement("li");
    li.innerHTML = `<a href="${url}">${name}</a>`;
    ul.appendChild(li);
  }
}

populate("media", media);
populate("sensors", sensors);
