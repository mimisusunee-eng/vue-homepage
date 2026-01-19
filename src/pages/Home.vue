.cards {
  display: grid;
  gap: 20px;
}

@media (min-width: 1024px) {
  .cards { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 1023px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 767px) {
  .cards { grid-template-columns: 1fr; }
}
