function first(arrOrStr) {
    if (Array.isArray(arrOrStr)) {
      return arrOrStr[0];
    }
    return arrOrStr.charAt(0);
  }
  
  function last(arrOrStr) {
    if (Array.isArray(arrOrStr)) {
      return arrOrStr[arrOrStr.length - 1];
    }
    return arrOrStr.charAt(arrOrStr.length - 1);
  }
  
  function kiss(arrOrStr) {
    const firstElement = first(arrOrStr);
    const lastElement = last(arrOrStr);
    return [lastElement, firstElement];
  }