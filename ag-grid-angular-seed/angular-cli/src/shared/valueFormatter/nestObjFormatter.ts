export const nestObjFormat = (params) => {
  let i = 0;
  let results = '';
  if (params.data.address) {
    (Object.keys(params.data.address)).forEach(element => {
      // this.results.push(element);
      if (i !== 0 && i < (Object.keys(params.data.address)).length) {
        results += ', ';
      }
      results += params.data.address[element];
      i++;
    });
  }

  return results;
};
