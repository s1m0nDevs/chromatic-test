const template = document.createElement("template");
template.innerHTML = `
<style> 
  label {
    color: red;
    display: block;
  }

  .description {
    color: blue;
  }
</style>

<label>
  <input type="checkbox"/>
  <slot></slot>
  <span class="description">
    <slot class="description"></slot>
  </span>

</label>`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      this.updateChecked(newValue);
    }
  }

  updateChecked(value) {
    this.checkbox.checked = value !== null && value !== "false";
  }
}

customElements.define("todo-item", TodoItem);
