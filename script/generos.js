function toggleGenre(card) {
    const details = card.querySelector('.genre-details');
    const isVisible = details.style.display === 'block';
    details.style.display = isVisible ? 'none' : 'block';
    card.classList.toggle('expanded', !isVisible);
}
