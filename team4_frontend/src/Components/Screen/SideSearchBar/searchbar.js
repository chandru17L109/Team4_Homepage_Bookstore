import React, { Component } from 'react'
// import {Button,Card,Row,Container} from 'react-bootstrap' 
import '../../Styles/searchbar.css';
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import * as actions from '../../action/action'
import {connect} from 'react-redux';
import arrow  from "../../images/Arrow.png"

class Searchbar extends Component {
    constructor(props){
        super(props);
            this.state = {popularbooks:[],ratingsall:"sort=-ratings",
                          childrenteen : "&category=Children_Teens", music : "&category=music", lifestyle : "&category=Lifestyle", travelholiday : "&category=Travel_Holiday",
                          below_500 : "&price[lt]=500",AboveEqual_500:"&price[gte]=500",AboveEqual_1000:"&price[gte]=1000",
                          dis50andAbove : "&discount[gte]=50", dis30andAbove : "&discount[gte]=30", dis10andAbove : "&discount[gte]=10",
                          rating5: "&ratings=5",rating4: "&ratings=4",rating3: "&ratings=3",rating2: "&ratings=2",rating1: "&ratings=1",
                          sortpriceLtoH : "&sort=price", sortpriceHtoL : "&sort=-price", sortdiscountLtoH : "&sort=discount", sortdiscounHtoL : "&sort=-discount",sortratingLtoH : "&sort=ratings",sortratingHtoL : "&sort=-ratings"   
                        }
    }

    childrenAndTeen(querycondition){ this.props.onFetchChildrenAndTeen(querycondition) }
    travelandholiday(querycondition){ this.props.onFetchTravelandHoliday(querycondition) }
    LifeStyle(querycondition){ this.props.onFetchLifetyle(querycondition) }
    Music(querycondition){ this.props.onFetchMusic(querycondition) }

    below500(querycondition) {this.props.onFetchPricebelow500(querycondition) }
    aboveand500(querycondition) { this.props.onFetchPrice500andabove(querycondition) }
    aboveand1000(querycondition) { this.props.onFetchPrice1000andabove(querycondition) }

    discount50andabove(querycondition) { this.props.onFetchDiscount50andabove(querycondition) }
    discount30andabove(querycondition) { this.props.onFetchDiscount30andabove(querycondition) }
    discount10andabove(querycondition) { this.props.onFetchDiscount10andabove(querycondition) }

    ratings5(querycondition){ this.props.onFetchRatings5(querycondition) }
    ratings4(querycondition){ this.props.onFetchRatings4(querycondition) }
    ratings3(querycondition){ this.props.onFetchRatings3(querycondition) }
    ratings2(querycondition){ this.props.onFetchRatings2(querycondition) }
    ratings1(querycondition){ this.props.onFetchRatings1(querycondition) }

    sortpricelowtohigh(querycondition){ this.props.onFetchSortpricelowtohigh(querycondition) }
    sortpricehightolow(querycondition){ this.props.onFetchSortpricehightolow(querycondition) }

    sortdiscountlowtohigh(querycondition){ this.props.onFetchSortdiscountlowtohigh(querycondition) }
    sortdiscounthightolow(querycondition){ this.props.onFetchSortdiscounthightolow(querycondition) }

    sortratingslowtohigh(querycondition){ this.props.onFetchSortratingslowtohigh(querycondition) }
    sortratingshightolow(querycondition){ this.props.onFetchSortratingshightolow(querycondition) }

    render() {
        console.log("popularbooks",this.state.popularbooks)
        return (
            <div className="pt-2" >
                <div className="search1 mt-2" >
                    <h4 className="text-info">Search By</h4>
                    <div class="nav">
                    
                        <div class="multi-level ml-0">
                            
                            <div class="item">
                                <input type="checkbox" id="A"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="A">Categories</label>
                                <ul className="ml-0">
                                    <li onClick={this.childrenAndTeen.bind(this,this.state.childrenteen)}>Childrens & Teens</li>
                                    <li onClick={this.Music.bind(this,this.state.music)}>Music</li>
                                    <li onClick={this.travelandholiday.bind(this,this.state.travelholiday)}>Travel & Holiday</li>
                                    <li onClick={this.LifeStyle.bind(this,this.state.lifestyle)}>Lifestyle</li>
                                </ul> 
                            </div>
                            
                            <div class="item">
                                <input type="checkbox" id="B"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="B">Price</label>
                                <ul>
                                    <li onClick={this.below500.bind(this,this.state.below_500)}>Below 500</li>
                                    <li onClick={this.aboveand500.bind(this,this.state.AboveEqual_500)}>500 and Above</li>
                                    <li onClick={this.aboveand1000.bind(this,this.state.AboveEqual_1000)}>1000 and Above</li>                 
                                </ul>
                            </div>

                            <div class="item">
                                <input type="checkbox" id="C"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="C">Discount</label>
                                <ul>
                                    <li onClick={this.discount50andabove.bind(this,this.state.dis50andAbove)}>50% and Above</li>
                                    <li onClick={this.discount30andabove.bind(this,this.state.dis30andAbove)}>30% and Above</li>
                                    <li onClick={this.discount10andabove.bind(this,this.state.dis10andAbove)}>10% and Above</li>
                                </ul>
                            </div>

                            <div class="item">
                                <input type="checkbox" id="G"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="G">Rating</label>
                                <ul>
                                    <li onClick={this.ratings5.bind(this,this.state.rating5)}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </li>
                                    <li onClick={this.ratings4.bind(this,this.state.rating4)}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </li>
                                    <li onClick={this.ratings3.bind(this,this.state.rating3)}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </li>
                                    <li onClick={this.ratings2.bind(this,this.state.rating2)}>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </li>
                                    <li onClick={this.ratings1.bind(this,this.state.rating1)}>
                                        <i className="text-warning"><FaStar/></i>
                                    </li>
                                </ul>
                            </div>

                            <h4 className="text-info">Sort By</h4>

                            <div class="item">
                                <input type="checkbox" id="D"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="D">Price</label>
                                <ul>
                                    <li onClick={this.sortpricelowtohigh.bind(this,this.state.sortpriceLtoH)}>Low to High</li>
                                    <li onClick={this.sortpricehightolow.bind(this,this.state.sortpriceHtoL)}>High to Low</li>
                                </ul>
                            </div>

                            <div class="item">
                                <input type="checkbox" id="E"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="E">Discount</label>
                                
                                <ul>
                                    <li onClick={this.sortdiscountlowtohigh.bind(this,this.state.sortdiscountLtoH)}>Low to High</li>
                                    <li onClick={this.sortdiscounthightolow.bind(this,this.state.sortdiscounHtoL)}>High to Low</li>
                                </ul>
                            </div>

                            <div class="item">
                                <input type="checkbox" id="F"/>
                                <img src={arrow} class="arrow"/><label className="text-primary" for="F">Rating</label>
                                
                                <ul>
                                    <li onClick={this.sortratingslowtohigh.bind(this,this.state.sortratingLtoH)}>Low to High</li>
                                    <li onClick={this.sortratingshightolow.bind(this,this.state.sortratingHtoL)}>High to Low</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                
                </div>
            </div>
               

                                
            
        )
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
        onFetchChildrenAndTeen : (querycondition) => dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchTravelandHoliday : (querycondition) => dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchLifetyle : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),  
        onFetchMusic : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
      
        onFetchPricebelow500 : (querycondition) => dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchPrice500andabove : (querycondition) => dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchPrice1000andabove : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        
        onFetchDiscount50andabove : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchDiscount30andabove : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchDiscount10andabove : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        
        onFetchRatings5 : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchRatings4 : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchRatings3 : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchRatings2 : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchRatings1 : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),

        onFetchSortpricelowtohigh : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchSortpricehightolow : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),

        onFetchSortdiscountlowtohigh : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchSortdiscounthightolow : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),

        onFetchSortratingslowtohigh : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),
        onFetchSortratingshightolow : (querycondition)=> dispatch(actions.fetchbooksbyquery(querycondition)),

    }
  }
  
  export default connect(null, mapDispatchToProps)(Searchbar);

// const mapStateToProps = (state) => {
//     console.log('Inside Component ', state);
//     return {
//         Books: state.BookReducer.books
//     }
//   }
  
    // price(selectedquery){
    //     console.log("selectedquery",selectedquery)
    //     var API = `http://localhost:4000/books/?${this.state.ratingsall}${selectedquery}`
    //     console.log("API",API)
    //     fetch(API,{
    //         headers:{'content-type': 'application/json'},
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState({popularbooks : data.data})
    //     });
    // }

    // all(){

    // }

// onFetchPricebelow500 : () => dispatch(actions.fetchbooksbypricebelow500()),
// onFetchPrice500andabove : () => dispatch(actions.fetchbooksbyprice500andabove()),
// onFetchPrice1000andabove : (querycondition)=> dispatch(actions.fetchbooksbyprice1000andabove(querycondition)),

{/* <li>All</li> */}
{/* <li onClick={this.price.bind(this,this.state.below_500)}>Below 500</li> */}
{/* <li onClick={this.price.bind(this,this.state.AboveEqual_500)}>500 and Above</li>
<li onClick={this.price.bind(this,this.state.AboveEqual_1000)}>1000 and Above</li> */}
{/* <li onClick={this.props.onFetchPricebelow500()}>Below 500</li> */}
{/* <li onClick={this.props.onFetchPricebelow500()}>Below 500</li> */}