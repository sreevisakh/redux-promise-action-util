export default class PromiseAction{

  constructor(name, prefix = null) {
    this.prefix = prefix !== null ? `${prefix}/`: '';
    this.name = name;

    this.PENDING = `${this.prefix}${name}_PENDING`;
    this.FULFILLED = `${this.prefix}${name}_FULFILLED`;
    this.REJECTED = `${this.prefix}${name}_REJECTED`;
    return `${this.prefix}${this.name}`
  }

  toString() {
    return `${this.prefix}${this.name}`;
  }
}