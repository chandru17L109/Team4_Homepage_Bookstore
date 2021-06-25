import React, { Component } from 'react'
import {Card,Container} from 'react-bootstrap' 
import nonfic2  from "../images/nonfic2.JPG"
import SearchPage from '../Screen/SideSearchBar/searchbar';
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import {Link} from "react-router-dom";
import '../Styles';
import '../Body/design.css';

import * as actions from '../action/action'
// import React, { useEffect } from 'react'
import {connect} from 'react-redux';

class AllBooksPage extends Component {
    constructor(props){
        super(props);
        this.state = {allbooks :[] , prev:false, next:true, showprev:true, shownext:true, current:1,paginate:[]}
    }

//     componentDidMount(){
//         fetch('http://localhost:4000'+'/books',{
//             headers:{'content-type': 'application/json'},
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             this.setState({allbooks : data.data, paginate : data.pagination})
//         });
//    }

   componentDidMount(){
      this.props.onFetchAllbooks();
   }

    render() {
        console.log("alldeals",this.state.allbooks)
        console.log("pagination",this.state.paginate)
    
        var allbookslist = this.props.Books.map((books, i)=>{
            return(
                <div className="col-4 col-sm-4 col-md-3 col-lg-3" key={i} style={{maxWidth:"280px"}}>
                    
                    <Card className="card-top border-0 mb-4 card shadow rounded Cardshover">
                        <Link to= {{pathname : '/description', query : books}}>
                            <Card.Img className="card-header bg-white " src={nonfic2} variant="top" />
                        </Link>
                        
                        <Card.Body className="card-body text-dark" >
                            <a style={{ textDecoration: "none" }} href={""}>
                                <Card.Title as="div" className="text-dark">
                                    <strong >{books.title}</strong>
                                    <br></br>
                                    <strong style={{fontWeight:"normal"}}>{books.author}</strong>
                                </Card.Title>
                            </a>
                           
                            <Card.Text as="div">
                                <strong style={{ textDecorationLine: 'line-through' }}>Rs. {books.price}</strong>
                                <strong style={{marginLeft:"7px",color:"red"}}>Rs. {books.sellprice}</strong>
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}} onClick={this.decidenow.bind(this)}>
                                    {/* <Link to="/login"><i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i></Link> */}
                                    <i className="text-primary " style={{fontSize:"20px"}}><FaCartPlus/></i>
                                </button>
                                <button class="btn btn-light border-0" style={{float:"right",marginLeft:"5px"}} onClick={this.decidenow.bind(this)}>
                                    {/*<Link to="/login"><i className="text-danger " style={{fontSize:"20px"}}><FaHeart/></i></Link>*/}
                                    <i className="text-danger " style={{fontSize:"20px"}}><FaHeart/></i>
                                </button>                                
                                <br></br>   
                            </Card.Text>
                            
                            <Card.Text as="div">
                                <strong style={{float:"left"}} variant="link">
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                        <i className="text-warning"><FaStar/></i>
                                    </strong>
                                <strong style={{marginLeft:"10px"}}>({books.discount}%)</strong>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            )
        })
        
        return (
            <>

        
            <div className="Main">


                    <div className="col-6 col-sm-6 col-md-10 col-xl-10 col-ls-10">
                        <div className="search-sidecontent">
                        <div className="row mt-3">
                        <h2>Mixed Collections</h2>
                        <Container>
                            <div className="row">
                                {allbookslist} 
                            </div>
                        </Container>

                        </div>
                        </div>
                    </div>
                </div>
                
            
            </>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('Inside Component ', state);
    return {
        Books: state.BookReducer.books
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchAllbooks: ()=>dispatch(actions.fetchbooksbymixedcollections()),
        onFetchAllbooks: ()=>dispatch(actions.fetchbooksbyquery()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllBooksPage);



