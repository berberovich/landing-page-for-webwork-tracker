export function* generateUniqueID() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
