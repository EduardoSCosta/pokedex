const capitalize = (pokeName) => {
  let capitalized = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

  return capitalized;
}

export default capitalize;