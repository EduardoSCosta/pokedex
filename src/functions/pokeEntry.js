const pokeEntry = (pokeIndex) => {
  let pokeNumber = pokeIndex.toString();

  switch (pokeNumber.length) {
    case 1:
      return ("00" + pokeNumber);
    case 2:
      return ("0" + pokeNumber);
    default:
      return (pokeNumber);
  }
}

export default pokeEntry;