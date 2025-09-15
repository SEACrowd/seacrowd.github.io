function toggleAuthors(btn) {
  const short = btn
    .closest(".bibliography-authors")
    .querySelector(".authors-short")
  const full = btn
    .closest(".bibliography-authors")
    .querySelector(".authors-full")
  short.classList.toggle("d-none")
  full.classList.toggle("d-none")
}
