import React, { Component } from 'react'
import {Navbar,Card,Container} from 'react-bootstrap' 
import nonfic2  from "../images/nonfic2.JPG"
import SearchPage from '../SideSearchBar/searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import {Link} from "react-router-dom";
import './commonStyling.css';
import './allBooksPage.css';

import * as actions from '../../action/action'
// import React, { useEffect } from 'react'
import {connect} from 'react-redux';

export default class AllBooksPage extends Component {
    constructor(props){
        super(props);
        this.state = {changewidth: {},allbooks :[] , prev:false, next:true, showprev:true, shownext:true, current:1,paginate:[]}
    }

//    componentDidMount(){
//       this.props.onFetchAllbooks();
//    }
   componentDidMount(){
            fetch('http://localhost:4000'+'/books',{
                headers:{'content-type': 'application/json'},
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({allbooks : data.data, paginate : data.pagination})
            });
       }

    changenext(){
        var cur = this.state.current;
        if(!this.state.paginate.next){
            console.log("no next page")
        }else{
            this.setState({current: this.state.current+1})
            cur=cur+1
            fetch(`http://localhost:4000/books?page=${cur}&limit=12`,{
                headers:{'content-type': 'application/json'},
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({allbooks : data.data, paginate : data.pagination})
            });
        }
    }

    changeprev(){
        var cur = this.state.current;
        if(!this.state.paginate.prev){
            console.log("no prev page")
        }else{
            this.setState({current: this.state.current-1})
            cur = cur-1
            fetch(`http://localhost:4000/books?page=${cur}&limit=12`,{
                headers:{'content-type': 'application/json'},
            })
            .then(res=>res.json())
            .then(data=>{
                this.setState({allbooks : data.data, paginate : data.pagination})
            });
        }
    }

    decidenow(){
        console.log("decide function")
        alert("Please Login!")
        this.props.history.push('/login')
    }

    render() {
        console.log("alldeals",this.state.allbooks)
        console.log("pagination",this.state.paginate)
    
        var allbookslist = this.state.allbooks.map((books, i)=>{
            return(
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 cardmarign" key={i}>
                    
                    <Card className="card-top border-0 mb-4 card shadow rounded Cardshover">
                        
                        <Link to= {{pathname : '/description', query : books}}>
                            <Card.Img className="card-header bg-white " src={nonfic2} variant="top" />
                        </Link>
                        
                        <Card.Body className="card-body change-font text-dark" >
                            <Card.Text as="div" className="cardtext">

                                <div className="text-dark">
                                    <strong >{books.title}</strong>
                                    <br></br>
                                    <strong style={{fontWeight:"normal"}}>{books.author}</strong>
                                </div>
                                   
                                <strong style={{ textDecorationLine: 'line-through' }}>Rs. {books.price}</strong>
                                <strong style={{marginLeft:"7px",color:"red"}}>Rs. {books.sellprice}</strong>

                                <div>
                                    <strong style={{float:"left"}} variant="link">
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </strong>
                                    <strong style={{marginLeft:"10px"}}>({books.discount}%)</strong>
                                </div>

                                <div className="aligncartwishlist">
                                    <button class="btn btn-light border-0 cartbutton"  onClick={this.decidenow.bind(this)}>
                                        <i className="text-primary "><FaCartPlus/></i>
                                    </button>
                                    <button class="btn btn-light border-0 wishlistbutton"   onClick={this.decidenow.bind(this)}>
                                        <i className="text-danger "><FaHeart/></i>
                                    </button> 
                                </div>                               

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        
        return (
            <>

            <div className="body">
                <div class="allBooksPageCarousel">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="polka-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                            </pattern>  
                            <style>
                            </style>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
                        <text x="50%" y="60%"  text-anchor="middle" className="fontsizecarousal"  >
                            “ Read, Learn and Grow ”
                        </text>
                    </svg>
                </div>
            </div>

            <div className="Main">
                <div className = "row">
                    <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 ">
                        <div className="search-option-catagory card shadow rounded">
                            <SearchPage/>
                        </div>
                    </div>

                    <div className="col-8 col-sm-9 col-md-9 col-xl-9 col-ls-9">
                        <div className="search-sidecontent">
                            <div className="row">
                            <h2  className="headingpage">Mixed Collections</h2>
                                <div className="row">
                                    {allbookslist} 
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                    

                <div className="bottomCard">
                    <Card className=" text-Black">
                        <Card.Img className="bottomCardImage" src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rN0W64K4ipau8gxv/videoblocks-simple-graphic-background-in-pastel-shades_bihmovigu_thumbnail-1080_01.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h1><b className="bottomCardContent">Connect and Celebrate</b></h1></Card.Title>
                            <Card.Text>
                                <h3 className="bottomCardContent">Find Customers favourite books and gift those books to your loved ones.</h3>
                            </Card.Text>
                            <Card.Text><h3 className="bottomCardContent">Find early deals and order now</h3></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

                <div className="float-right m-3">
                    <ul class="pagination pagination-lg">
                        <li class="page-item">
                            <a class="page-link" onClick={this.changeprev.bind(this)} disabled={this.state.showprev}>Prev</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" >{this.state.current}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" onClick={this.changenext.bind(this)} disabled={this.state.shownext}>Next</a>
                        </li>
                    </ul>

                </div>
                
           </div>
            
            </>
        )
    }
}


// const mapStateToProps = (state) => {
//     console.log('Inside Component ', state);
//     return {
//         Books: state.BookReducer.books
//     }
//   }
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//         // onFetchAllbooks: ()=>dispatch(actions.fetchbooksbymixedcollections()),
//         onFetchAllbooks: ()=>dispatch(actions.fetchbooksbyquery()),
//     }
//   }
  
//   export default connect(mapStateToProps, mapDispatchToProps)(AllBooksPage);



// fetchnextorprevpage(CurrentPage){
//     fetch(`http://localhost:4000/books?page=${CurrentPage}&limit=12`,{
//         headers:{'content-type': 'application/json'},
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         this.setState({allbooks : data.data, paginate : data.pagination})
//     });
// }


//     componentDidMount(){
//         fetch('http://localhost:4000'+'/books',{
//             headers:{'content-type': 'application/json'},
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             this.setState({allbooks : data.data, paginate : data.pagination})
//         });
//    }

// changenext(){
//     var cur = this.state.current;
//     if(!this.state.paginate.next){
//         console.log("no next page")
//     }else{
//         this.setState({current: this.state.current+1})
//         cur=cur+1
//         this.fetchnextorprevpage.bind(cur)
//     }
// }

// changeprev(){
//     var cur = this.state.current;
//     if(!this.state.paginate.prev){
//         console.log("no prev page")
//     }else{
//         this.setState({current: this.state.current-1})
//         cur = cur-1
//         this.fetchnextorprevpage.bind(cur)
//     }
// }