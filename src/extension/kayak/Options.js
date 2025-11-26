import React, {Component} from 'react';

class Options extends Component {
    state = {
        priceValue: { min: 100, max: 500},
        passengersValue: {min: 1, max: 5},
        checked: false,
        selectedBrands: [],
        manCheckedcounter: 0
    }

  brandsAmount = (data, brand) => {
        const filteredData = data.filter(kayak => kayak.brand === brand);
        return filteredData.length;
    }

  brandsSelected = (brand,event) => {
        const update = [brand];
        const selectedBrands = this.state.selectedBrands;
        this.setState({
            checked: event.target.checked,
          selectedBrands: [...selectedBrands,...update]
        });
    }

    render(){
        const data = this.props.data;
        const selectedBrandsData = data.reduce((acc,current) => {
            const brand = acc.find(kayak => kayak.brand === current.brand);
            if(!brand){
                return acc.concat([current]);
            }else{
                return acc
            }
        },[]);
        return(
            <div className="filter-main">
                <div className="filter-results">
                    <div className="filter-header header">
                        <i className="fas fa-filter"></i>
                        Sortering
                    </div>

                    <div className="brands">
                        <p className="subTitle">Brands</p>
                        <div>
                        {
                          selectedBrandsData.map(kayak =>
                            <label key={kayak.kayakID}>
                                <input
                                    type="checkbox"
                                    checked={this.state.selectedBrands[kayak.brand] && this.state.checked}
                                    onChange={event => {
                                        this.brandsSelected(kayak.brand,event);
                                        this.props.filtrationByBrands(event.target.checked,kayak.brand);
                                    }}
                                />
                                <span>{kayak.brand}</span>
                                <div>
                                    {this.brandsAmount(data,kayak.brand)}
                                </div>
                            </label>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Options;
