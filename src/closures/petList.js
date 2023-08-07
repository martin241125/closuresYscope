function createPetList() {
  // Tu código aquí 👈
  let petList = [];

  return function addPetList(myPet) {
    if (myPet) {
      petList.push(myPet);
    }
    return petList;
  };
}
