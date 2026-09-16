const CONFIG = {
  upsellUrl: "COLE_AQUI_O_LINK_DO_UPSELL",
  downsellUrl: "COLE_AQUI_O_LINK_DO_DOWNSELL",
  accessUrl: "COLE_AQUI_O_LINK_DA_AREA_DE_MEMBROS"
};

function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = url && !url.startsWith("COLE_AQUI") ? url : "#";
  if (!url || url.startsWith("COLE_AQUI")) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Configure este botão no arquivo app.js antes de publicar.");
    });
  }
}

setLink("upsellButton", CONFIG.upsellUrl);
setLink("upsellButtonBottom", CONFIG.upsellUrl);
setLink("downsellButton", CONFIG.downsellUrl);
setLink("finalDecline", CONFIG.accessUrl);
