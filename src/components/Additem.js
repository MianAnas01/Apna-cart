import React from 'react';


class Additem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0
        }
    }

    state = {}
    render() {
        return (
            <form className='row mb-5'
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.additem(this.state.productName, Number(this.state.productPrice));
                }} >
                <div className="mb-3  col-4 ">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="Name"
                        name="productName"
                        onChange={(e) => {
                            this.setState({ productName: e.currentTarget.value })
                        }}
                        value={this.state.productName}

                    />
                </div>
                <div className="mb-3 col-4" >
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="Price"
                        name="productPrice"

                        onChange={(e) => {
                            this.setState({ productPrice: Number(e.currentTarget.value) })
                        }}
                        value={this.state.productPrice}
                    />
                </div>

                <button type="submit" className="btn btn-primary col-2  " >
                    Add</button>
            </form>
        )
    }
}

export default Additem