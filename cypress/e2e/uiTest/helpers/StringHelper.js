export class StringHelper {
  getText(text) {
    let value;
    return (value = /.*/.exec(text));
  }
}
