export const GET_BOOKS_BY_QUERY = "GET_BOOKS_BY_QUERY"
export const GET_BOOKS_BY_HEADERSEARCHQUERY = "GET_BOOKS_BY_HEADERSEARCHQUERY"

const API = "http://localhost:4000"
var FETCHQUERY = ""

var FINDURL = () => {
    var url = window.location.href.split("/");
    console.log("window.location.href",url)
    var findurl = url[url.length - 1]
    console.log("findurl",findurl)

    if(findurl === "allbookspage"){
        FETCHQUERY = "/?"
    }else if(findurl === "newrelease"){
        FETCHQUERY = "?sort=-date"
    }else if(findurl === "popularpage"){
        FETCHQUERY = "?sort=-ratings"
    }else if(findurl === "todaydealspage"){
        FETCHQUERY = "?sort=-discount"
    }

    return FETCHQUERY
}

var CONDITION = (givencondition) =>{
    var specificCondition = ""
    if(givencondition){
        specificCondition = givencondition
    }else{
        specificCondition = ""
    }
    return specificCondition
}

export const fetchbooksbyquery = (givencondition) => {

    let query = FINDURL();
    console.log("query",query);
    let condition = CONDITION(givencondition)
    console.log("condition",condition);

    console.log(`${API}/books${query}${condition}`)
        return dispatch => {
            return fetch(`${API}/books/${query}${condition}`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then(data =>data.json()) 
                .then(res=>{
                    dispatch({
                        type : GET_BOOKS_BY_QUERY,
                        payload : res.data
                    })
                })
        }
}

export const fetchheadersearchresults = (searchvalue) => {
    console.log("searchvalue",searchvalue);
    return dispatch => {
        return fetch(`${API}/books/CommonSearch/${searchvalue}`, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(data =>data.json()) 
            .then(res=>{

                dispatch({
                    type : GET_BOOKS_BY_HEADERSEARCHQUERY,
                    payload : res
                })
            })
    }
}


    // else{
    //     FETCHQUERY = `/CommonSearch/${findurl}/?1`
    // }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// export const GET_BOOKS_BY_MIXEDCOLLECTION = "GET_BOOKS_BY_MIXEDCOLLECTION"
// export const GET_BOOKS_BY_TODAYDEALS = "GET_BOOKS_BY_TODAYDEALS"
// export const GET_BOOKS_BY_NEWRELEASE = "GET_BOOKS_BY_NEWRELEASE"
// export const GET_BOOKS_BY_POPULAR = "GET_BOOKS_BY_POPULAR" 
// export const GET_BOOKS_BY_PRICE_LESSTHAN500 = "GET_BOOKS_BY_PRICE_LESSTHAN500"
// export const GET_BOOKS_BY_PRICE_500ANDABOVE = "GET_BOOKS_BY_PRICE_500ANDABOVE"
// export const GET_BOOKS_BY_PRICE_1000ANDABOVE = "GET_BOOKS_BY_PRICE_1000ANDABOVE"
// export const fetchbooksbypricebelow500 = () => {

//     let query = FINDURL();
//     console.log("query",query)

//     return dispatch => {
//         return fetch(`${API}/books${query}&price[lt]=500`, {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json())
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_PRICE_LESSTHAN500,
//                     payload : res.data
//                 })
//             })
//     }
// }

// export const fetchbooksbypricebelow500 = () => {

//     let query = FINDURL();
//     console.log("query",query)

//     return dispatch => {
//         return fetch(`${API}/books${query}&price[lt]=500`, {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json())
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_PRICE_LESSTHAN500,
//                     payload : res.data
//                 })
//             })
//     }
// }
// export const fetchbooksbyprice500andabove= () => {

//     let query = FINDURL();
//     console.log("query",query)

//     return dispatch => {
//         return fetch(`${API}/books${query}&price[gte]=500`, {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json())
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_PRICE_1000ANDABOVE,
//                     payload : res.data
//                 })
//             })
//     }
// }

// export const fetchbooksbyprice1000andabove= (querycondition) => {

//     let query = FINDURL();
//     console.log("query",query)

//     return dispatch => {
//         return fetch(`${API}/books${query}&${querycondition}`, {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json())
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_PRICE_1000ANDABOVE,
//                     payload : res.data
//                 })
//             })
//     }
// }






// ------------------------------------------------------------------------

// export const fetchbooksbymixedcollections = () => {
//     return dispatch => {
//         return fetch(API+'/books', {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json()) 
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_MIXEDCOLLECTION,
//                     payload : res.data
//                 })
//             })
//     }
// }
// export const fetchbooksbytodaydeals = () => {
//     return dispatch => {
//         return fetch(API+'/books?sort=-discount', {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json())
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_TODAYDEALS,
//                     payload : res.data
//                 })
//             })
//     }
// }

// export const fetchbooksbynewrelease = () => {
//     return dispatch => {
//         return fetch(API+'/books?sort=-date', {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json())
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_NEWRELEASE,
//                     payload : res.data
//                 })
//             })
//     }
// }

// export const fetchbooksbypopularbooks = () => {
//     return dispatch => {
//         return fetch(API+'/books?sort=-ratings', {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json())
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_POPULAR,
//                     payload : res.data
//                 })
//             })
//     }
// }


// if(query[query.length-1] === 1){
//     return dispatch => {
//         return fetch(`${API}/books${query}${condition}`, {
//                 headers: { 'Content-Type': 'application/json' },
//             })
//             .then(data =>data.json()) 
//             .then(res=>{
//                 dispatch({
//                     type : GET_BOOKS_BY_QUERY,
//                     payload : res
//                 })
//             })
//     }
// }else{