import React,{Component} from 'react';
import { connect } from "react-redux";
import {kayakInfo} from '../product/KayakInfo';
import sit_on from '../assets/images/kayak/transparent/sit-on-kayak.png';
import sit_in from '../assets/images/kayak/transparent/sit-in-kayak.png';
import recreational from '../assets/images/kayak/transparent/recreational-kayak.png';
import crossover from '../assets/images/kayak/transparent/crossover-kayak.png';
import inflatable from '../assets/images/kayak/transparent/inflatable-kayak.png';

class Book extends Component {
    state = {
        bookingConfirmed: false
    }
    filtration = (data,kayakID) => {
        const filteredData = data.filter(kayak => kayak.kayakID === kayakID);
        return filteredData
    }
    getImage = kayakID => {
      if(kayakID === 'Sit On Kayak') {
        return sit_on;
      }else if(kayakID === 'Sit In Kayak'){
        return sit_in;
      }else if(kayakID === 'Recreational Kayak') {
        return recreational;
      } else if(kayakID === 'Crossover Kayak') {
        return crossover;
      } else if(kayakID === 'Inflatable Kayak') {
        return inflatable;
      }
    }
    render(){
        return(
            <div>
            {
                this.filtration(kayakInfo,this.props.Kayak).map(kayak =>
                <div>
                    <img src={this.getImage(kayak.kayakID)} alt="kayak"/>
                    <h1>{kayak.kayakID}</h1>
                    <h2>DKK {`${kayak.price}`}</h2>
                </div>
                )}
            {
                this.state.bookingConfirmed ?
               <p>
                   <h1>Tak for din reservation af Kayak.</h1>


                       <h2>Du bør indenfor 24 timer få en bekræftelse på det oplyste mail.</h2>
                       <h3>Din reservationsordre: #123456.</h3>
                   </p>

                :
                    <p>
                        <html>
                        <body>
                        <h1>Oplysninger:</h1>
                        <form name='registration' onSubmit="">
                            <ul>
                                <pre><label htmlFor="passid">Fornavn:</label>
                                <input type="password" name="firstname" size="12"/></pre>
                                <pre><label htmlFor="username">Efternavn:</label>
                                <input type="text" name="surename" size="12"/></pre>
                                <pre><label htmlFor="address">Adresse:</label>
                                <input type="text" name="address" size="30"/></pre>
                                <pre><label htmlFor="country">Land:</label>
                                <select name="country">
                                    <option selected="" value="Default">Danmark</option>
                                    <option value="AF">Sverige</option>
                                    <option value="AF">Norge</option>
                                </select></pre>
                                <pre><label htmlFor="zip">Postnummer:</label>
                                <input type="text" name="zip"/></pre>
                                <pre><label htmlFor="email">Email:</label>
                                <input type="text" name="email" size="50"/></pre>
                                <pre><label id="gender">Køn:</label>
                                <input type="radio" name="m-gender" value="Mand"/><span>Mand</span>
                                <input type="radio" name="k-gender" value="Kvinde"/><span>Kvinde</span></pre>
                            </ul>
                        </form>
                        </body>
                        </html>
                <button id="" onClick={() => this.setState({ bookingConfirmed: true })}>Bekræft Reservationen</button>
                    </p>
                        }

            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Book)
