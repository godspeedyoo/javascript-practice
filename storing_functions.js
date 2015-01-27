
  // var store = {
  //   nextId: 1,
  //   cache: {},
  //   add: function(fn) {
  //     if(!fn.id) {
  //       fn.id = store.nextId++;
  //       return !!(store.cache[fn.id] = fn);
  //     }
  //   }
  // }

// ways to store functions in cache and assign id to them

function Cache() {
  this.nextId = 1,
  this.memory = {}
}

Cache.prototype.add = function(funct) {
  if(!funct.id){
    funct.id = this.nextId++;
    return !!(this.memory[funct.id] = funct);
  }
}

cache = new Cache();
