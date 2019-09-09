import Preference from './Preference';

export default class StringPreference extends Preference {

  constructor({name, label, description}){
    super({name, label, description});

  }

  _buildEl() {
    let el = super._buildEl();
    el.type = 'text';
    return el;
  }

  get() {
    return this.el.value;
  }

  set({value}) {
    this.el.value = value;
  }
}

StringPreference.TYPE = 'string';
