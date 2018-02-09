import React, {Component} from 'react';
import Select from 'react-select';
import styles from './styles.css'

export default class MultiSelectCustom extends Component {
  constructor(props) {
    super(props);

    this.state ={
      multi: true,
      multiValue: [],
      options: [
        {
          label: "home::landing",
          value: 10331,
        },
        {
          label: "products::page1",
          value: 9977,
        },
        {
          label: "products::page2",
          value: 8249,
        },
        {
          label: "products::page3",
          value: 6849,
        },
        {
          label: "click::on::product",
          value: 4325,
        },
        {
          label: "product::checkout",
          value: 1321,
        },
      ],
      value: undefined
    }
  }

  handleOnChange = (value) => {
    const { multi } = this.state;
    if (multi) {
      this.setState({ multiValue: value });
    } else {
      this.setState({ value });
    }
  }

  render() {
    const { multi, multiValue, options, value } = this.state;
    return (
      <div>
        <Select.Creatable
          multi={multi}
          options={options}
          onChange={this.handleOnChange}
          value={multi ? multiValue : value}
          placeholder='Search or Type events names'
        />
      </div>
    );
  }
}