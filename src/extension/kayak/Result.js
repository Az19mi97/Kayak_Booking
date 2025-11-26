import React,{Component} from 'react';
import Kayak from './Kayaks';
import { sortBy } from 'lodash';

class Result extends Component {
    state = {
        showFirstPage: 1,
        showProductsOnOnePage: 4
    }

    pageNext = event => {
        this.setState({
          showFirstPage: Number(event.target.id)
        });
    }

    render(){
        const {data,sortKey,onSort} = this.props;
        const sortedList = sortBy(data, sortKey);
        const {showFirstPage,showProductsOnOnePage} = this.state;
        const ShowLastProduct = showFirstPage * showProductsOnOnePage;
        const showFirstProduct = ShowLastProduct - showProductsOnOnePage;
        const currentOptions = sortedList.slice(showFirstProduct, ShowLastProduct);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(sortedList.length / showProductsOnOnePage); i++) {
        pageNumbers.push(i);
        }

        return(
            <div className="result-main">
                <div className="info">
                    <div className="info-header header">
                        <i></i>
                        Søgning...
                        <div className="sort">
                            <p></p>
                            <div>
                                <button onClick={() => onSort('price')}>Samlede Beløb</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="results">
                    {currentOptions.map((kayak,index) =>
                    <Kayak
                        key={index}
                        kayakID={kayak.kayakID}
                        description={kayak.description}
                        price={kayak.price}
                    />)}
                </div>
                <ul className="page-numbers">
                {pageNumbers.map(number =>
                    <li
                        className={showFirstPage===number && 'showFirstPage'}
                        key={number}
                        id={number}
                        onClick={this.pageNext}
                        >
                        {number}
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

export default Result;
