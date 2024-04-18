const forExpression = (exp: () => boolean): Promise<boolean> => {
  return new Promise((resolve) => {
    const checker = setInterval(() => {
      const done = exp();
      if (done) {
        clearInterval(checker);
        resolve(true);
      }
    }, 1000);
  });
};

export const elementGetsVisible = (selector: string) =>
  forExpression(() => !!document.querySelector(selector));
