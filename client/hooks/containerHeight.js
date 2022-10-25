export const containerHeight = (nextBlocks) => {
  let starter = 0;
  nextBlocks.forEach((element) => {
    starter = starter + document.getElementById(`${element._id}`).offsetHeight;
  });
  return starter;
};
