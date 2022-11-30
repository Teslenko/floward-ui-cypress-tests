export class StringHelper {
  getText(text) {
    let value;
    return (value = /.*/.exec(text));
  }

  getTextFromSelector(selector) {
    const pom = {};
    return cy
      .get(selector)
      .invoke("text")
      .then((text) => {
        this.getText(text);
        cy.wrap(Math.ceil(parseFloat(text))).as("nameText");
        cy.get("@nameText").then((nameText) => {
          pom.text = nameText.toString();
        });
      });
  }

  defineFactorial(v) {
    for (let i = 1; ; i++) {
      if (v % i == 0) {
        v = parseInt(v / i);
      } else {
        break;
      }
    }

    if (v == 1) {
      return true;
    } else {
      return false;
    }
  }
}
