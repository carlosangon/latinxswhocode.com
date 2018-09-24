const devSelector = (devs, {text}) => {
    return devs.filter((dev) => {
      const textMatch = dev.tags.toLowerCase().includes(text.toLowerCase())
      return textMatch;
    })
  };
  
export default devSelector
