export const getRandomPosition = (boxWidth, boxHeight, parentWidth, parentHeight) => {
  const left = Math.floor(Math.random() * (parentWidth - boxWidth));
  const top = Math.floor(Math.random() * (parentHeight - boxHeight));

  return { left, top };
};
