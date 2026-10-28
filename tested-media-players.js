// The Open in new tab link adds this, and the page opens with the table expanded
const mediaPlayersExpandedHash = "#expanded-table";

function setMediaPlayersExpanded(wrapper, expanded) {
  const button = wrapper.querySelector(".media-players__toggle");
  wrapper.classList.toggle("media-players--expanded", expanded);
  button.textContent = expanded ? "Close" : "Expand table";
  button.setAttribute("aria-expanded", String(expanded));
}

// Registered once: document$ fires again on every instant navigation
document.addEventListener("keydown", function (event) {
  const wrapper = document.querySelector(".media-players--expanded");
  if (event.key === "Escape" && wrapper) {
    setMediaPlayersExpanded(wrapper, false);
  }
});

document$.subscribe(function () {
  const wrapper = document.querySelector(".media-players");
  if (!wrapper) {
    return;
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = "md-button media-players__toggle";

  const newTab = document.createElement("a");
  const url = new URL(location.href);
  url.hash = mediaPlayersExpandedHash;
  newTab.href = url.href;
  newTab.target = "_blank";
  newTab.rel = "noopener";
  newTab.className = "md-button";
  newTab.textContent = "Open in new tab";

  const actions = document.createElement("div");
  actions.className = "media-players__actions";
  actions.append(button, newTab);
  wrapper.prepend(actions);
  setMediaPlayersExpanded(wrapper, location.hash === mediaPlayersExpandedHash);

  button.addEventListener("click", function () {
    setMediaPlayersExpanded(wrapper, !wrapper.classList.contains("media-players--expanded"));
  });

  wrapper.addEventListener("click", function (event) {
    // Footnote links point below the table, so close first or the jump lands under the overlay
    if (event.target.closest('a[href^="#"]')) {
      setMediaPlayersExpanded(wrapper, false);
      return;
    }
    // A drag to copy text also ends in a click
    if (window.getSelection().toString()) {
      return;
    }
    const header = event.target.closest("thead th");
    if (header && header.cellIndex > 1) {
      const selected = !header.classList.contains("media-players__column--selected");
      for (const row of header.closest("table").rows) {
        row.cells[header.cellIndex].classList.toggle("media-players__column--selected", selected);
      }
    }
    const row = event.target.closest("tbody tr");
    if (row) {
      row.classList.toggle("media-players__row--selected");
    }
  });
});
