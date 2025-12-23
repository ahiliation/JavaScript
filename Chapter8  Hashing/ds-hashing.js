class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
  }

  /**
   * Basic DSA Hash Algorithm: Sums char codes and applies modulo.
   * @param {string} key 
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // 31 is a common prime number used to reduce collisions
      hash = (hash * 31 + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value]; // Basic implementation (no collision handling)
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index] ? this.table[index][1] : undefined;
  }
}

const myMap = new HashTable();
myMap.set("username", "dev_user2025");
console.log(myMap.get("username")); // Output: dev_user2025
