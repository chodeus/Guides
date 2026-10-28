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
  wrapper.prepend(button);
  setMediaPlayersExpanded(wrapper, false);

  button.addEventListener("click", function () {
    setMediaPlayersExpanded(wrapper, !wrapper.classList.contains("media-players--expanded"));
  });

  // Footnote links point below the table, so close first or the jump lands under the overlay
  wrapper.addEventListener("click", function (event) {
    if (event.target.closest('a[href^="#"]')) {
      setMediaPlayersExpanded(wrapper, false);
    }
  });
});
