import React, {Component} from 'react';
import SpecialDesires from './kayak/SpecialDesires';
import {kayakInfo} from '../product/KayakInfo';
import Options from './kayak/Options';
import Result from './kayak/Result'

class Selection extends Component {
    state = {
        data: kayakInfo,
        location: '',
        searchParameters: [],
        sortKey: 'price'
    }
    onSort = sortKey => {
        this.setState({ sortKey });
    }
    filterByPrice = (minPrice, maxPrice) => {
        this.setState({
            data: kayakInfo
        });
        const filteredData = this.state.data.filter(kayak => kayak.price >= minPrice && kayak.price <= maxPrice);
        this.setState({
            data: filteredData
        });
    }
  filtrationByBrands = (checked,brand) => {
        if(checked){
            const searchParameters = this.state.searchParameters;
            if(searchParameters.length===0){
                const filteredData = kayakInfo.filter(kayak => kayak.brand === brand);
                this.setState({
                    data: filteredData,
                    searchParameters: [...searchParameters,brand]
                });
            }
            else{
                let array=[];
                const updateParameters = [...searchParameters,brand]
                updateParameters.forEach(element => {
                    const datas = kayakInfo.filter(kayak => kayak.brand === element);
                    array=[...array,...datas];
                });
                this.setState({
                    data: array,
                    searchParameters: updateParameters
                });
            }
        }
        else {
            const searchParameters = this.state.searchParameters;
            const updateParameters = searchParameters.filter(item => item !== brand);
            if(updateParameters.length>0){
                let array=[];
                updateParameters.forEach(element => {
                    const datas = this.state.data.filter(kayak => kayak.brand === element);
                    array=[...array,...datas];
                });
                this.setState({
                    data: array,
                    searchParameters: updateParameters
                });
            }
            else{
                this.setState({
                    data: kayakInfo,
                    searchParameters: []
                });
            }
        }
    }
    render(){
        return(
            <div className="home">
                <section id="block">
                    <SpecialDesires />
                    <div className="container large main-filter">
                        <Options
                            data={kayakInfo}
                            filterByPrice={this.filterByPrice}
                            filtrationByBrands={this.filtrationByBrands}
                        />
                        <Result data={this.state.data} sortKey={this.state.sortKey} onSort={this.onSort} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Selection;
