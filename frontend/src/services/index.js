export function* generateUniqueID() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const generateID = generateUniqueID();

export function Feature(obj) {
  const { title, content, advantages, icon, image } = obj;
  this.id = generateID.next().value;
  this.title = title;
  this.content = content;
  this.advantages = advantages.map((adv, i) => {
    return {
      id: i + 1,
      content: adv,
    };
  });
  this.icon = icon;
  this.image = image;
}
