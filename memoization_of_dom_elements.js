function getDom(name){
  // if not found, instantiate new cache
  if (!getDom.cache) getDom.cache = {}
  // if found, return the object or search for it while storing it in cache
  return getDom.cache[name] =
    getDom.cache[name] || document.getElementsByTagName(name);
}
