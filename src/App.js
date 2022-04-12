import React from 'react'

class Item extends React.Component{
  render(){
    return (
      <li>
        {this.props.name} - ${this.props.price}
      </li>
    )
  }
}

class App extends React.Component{

  state = {
    items: [
      { id:1, name: 'Apple', price: 1500 },
      { id:2, name: 'Orange', price: 1000 }
    ]
  }

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items: [
        ...this.state.items,
        { id, name: name, price: price }
      ]
    })
  }

  render(){
    return (
      <div>
        <h1> Hello Component </h1>
        <ul>
          {
            this.state.items.map( i => {
              return (
                <Item key={i.id} name={i.name} price={i.price} />
              )
            })
          }
        </ul>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.priceRef} />
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default App;