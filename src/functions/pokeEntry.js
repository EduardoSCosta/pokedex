const pokeEntry = (pokeIndex) => {
  let pokeNumber = pokeIndex.toString();
  if(pokeNumber.length === 1){
    return ("#00" + pokeNumber);
  }
  if(pokeNumber.length === 2){
    return ("#0" + pokeNumber);
  }
  if(pokeNumber.length === 3){
    return ("#" + pokeNumber);
  } else {
    return ("#" + pokeNumber);
  }
}

export default pokeEntry;