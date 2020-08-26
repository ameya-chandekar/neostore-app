import axios from 'axios';
import { buildHeader, ipInfoHeader } from './helpers';
import { ROOT_URL } from './globals';
// import { DELETE_ADDRESS } from '../redux/actions/actionTypes';


//App API's
const live = false;
const UPDATE_RATING={type:'PUT',url:ROOT_URL + 'updateProductRatingByCustomer/'}
const GET_PRODUCT = { type: 'GET', url: ROOT_URL + 'defaultTopRatingProduct/' };
// const GET_ALL_PRODUCT = { type: 'GET', url: ROOT_URL + 'commonProducts'} ;
// const GET_PRODUCT_BY_CATEG = { type: 'GET', url: ROOT_URL+'getProductByCateg/' };
// const GET_PRODUCT_BY_COLOR = { type: 'GET', url: ROOT_URL+'getProductBycolor/' };

const GET_ALL_CATEGORIES={type:'GET',url:ROOT_URL+'getAllCategories/'};
const GET_ALL_COLORS={type:'GET',url:ROOT_URL+'getAllColors/'};
// const GET_ALL_SEARCH={type:'GET',url:ROOT_URL+'getProductBySearchText/'};
const REGISTER ={type :'POST',url:ROOT_URL+'register/' };
const LOG_IN ={ type : 'POST' ,url:ROOT_URL + 'login/'};
const GET_ORDERS={type:'GET',url:ROOT_URL+'getOrderDetails/'};
const GET_ORDER_INVOICE={type:'POST',url:ROOT_URL+'getInvoiceOfOrder/'};
const ADD_ADDRESS={type:'POST',url:ROOT_URL+'address/'};
const GET_ADDRESS={type:'GET',url:ROOT_URL+'getCustAddress/'};
const UPDATE_ADDRESS={type:'PUT',url:ROOT_URL+'updateAddress/'};
const CHANGE_PASS={type:'POST',url:ROOT_URL+'changePassword/'}

const ADD_TO_CART ={type :'POST',url:ROOT_URL+'addDataToCart/' };
const GET_CART_PRODUCT={type :'GET',url:ROOT_URL+'getCartData/' };
const PLACE_ORDER={type :'POST',url:ROOT_URL+'addProductToCartCheckout/' };
const EDIT_PROFILE_DETAILS={type:'PUT',url:ROOT_URL+'profile'}

const GET_PROFILE={type:'GET',url:ROOT_URL+'getCustProfile/'};
const FORGOT_PASSWORD={type:'POST',url:ROOT_URL+'forgotPassword'};
const RECOVER_PASSWORD={type:'POST',url:ROOT_URL+'recoverPassword'};
export const API = {
	updateRating:(data,cb,data2)=>request(data,cb,UPDATE_RATING,data2),
	getProduct: (data, cb) => request(data, cb, GET_PRODUCT),
	getAllCategories: (data, cb) => request(data, cb, GET_ALL_CATEGORIES),
	getAllColors: (data, cb) => request(data, cb, GET_ALL_COLORS),

	getAllProduct: (data, cb) =>
	{
		console.log(data , "data from API.js file for all product ")
		return request(data , cb,	{ type: 'GET', url: `${ROOT_URL}commonProducts`})
				
	},
	getNavProduct: (data, cb) =>
	{
		console.log(data , "data from API.js file for all product ")
		return request(data , cb,	{ type: 'GET', url: `${ROOT_URL}commonProducts`})
				
	},
	// request(data, cb,{ type: 'GET', url: `${ROOT_URL}commonProducts?category_id=${data}`}


		// ,{"category_id":data,
	// "color_id":data.col_id,
	// "sortBy":data.sortBy,
	// "sortIn":data.sortIn,
	// "name":data.name,
	// "pageNo":data.pageNo?data.pageNo:1,
	// "perPage":data.perPage?data.perPage:100
        //   }
// ),
	
	// getProductByCateg: (data, cb) => {

	// 	return request({}, cb, { type: 'GET', url: `${ROOT_URL}commonProducts?category_id=${data}`})
		
	// },

	// // getProductByCateg: (data, cb) => {
	// // 	//GET_PRODUCT_BY_CATEG.url = GET_PRODUCT_BY_CATEG.url + data;
	// // 	return request({}, cb, { type: 'GET', url: `${ROOT_URL}getProductByCateg/${data}` })
	// // },

	// getProductByColor: (data, cb) => {
	// 	// GET_PRODUCT_BY_COLOR.url = GET_PRODUCT_BY_COLOR.url + data;
	// 	// return request({}, cb, GET_PRODUCT_BY_COLOR)
	// 	return request({}, cb, { type: 'GET', url: `${ROOT_URL}commonProducts?color_id=${data}` })
	// },
	getProductById: (data, cb) => {
		return request({}, cb, { type: 'GET', url: `${ROOT_URL}getProductByProdId/${data}` })
	},

	getProductBySearchText: (data, cb) => {
		return request({}, cb, { type: 'GET', url: `${ROOT_URL}getProductBySearchText/${data}` })
	},


	addtocart:(data ,cb,data2)=>request(data, cb, ADD_TO_CART,data2),
	placeOrder:(data ,cb,data2)=>request(data, cb, PLACE_ORDER,data2),
	// getCartProduct: (data, cb) => {
	
	// 	return request({}, cb, { type: 'GET', url: `${ROOT_URL}getCartData/${data}` })
	// },
	
	getCartProduct:(cb,data2)=>request(null, cb, GET_CART_PRODUCT,data2),
	deleteCartProduct:(data ,cb,data2)=>{
		return request({}, cb, { type: 'DELETE', url: `${ROOT_URL}deleteCustomerCart/${data}`},data2)
	},

	register:(data ,cb)=>request(data, cb, REGISTER),
	logIn:(data,cb)=> request(data,cb,LOG_IN ),
	forgotPassword:(data,cb)=> request(data,cb,FORGOT_PASSWORD),
	
	recoverPassword:(data,data2)=>request(data,RECOVER_PASSWORD,data2),


	addAddress:(data,cb,data2)=>request(data,cb,ADD_ADDRESS,data2),
	getAddress:(data,cb,data2)=>request(data,cb,GET_ADDRESS,data2),
	updateAddress:(data,cb,data2)=>request(data,cb,UPDATE_ADDRESS,data2),
	deleteAddress: (data, cb,data2) => {
		return request({}, cb, { type: 'DELETE', url: `${ROOT_URL}deladdress/${data}`} ,data2)
	},

	getProfileData:(data,cb,data2)=>request(data,cb,GET_PROFILE,data2),
	changePassword:(data,cb,data2)=>request(data,cb,CHANGE_PASS,data2),
	getOrders:(data,cb,data2)=>request(data,cb,GET_ORDERS,data2),
	getOrderPDF:(data,cb,data2)=>request(data,cb,GET_ORDER_INVOICE,data2),

	// editProfileDetails:(data ,cb,data2)=>{
	// 	return request({}, cb, { type: 'PUT', url: `${ROOT_URL}profile/${data}`},data2)
	// },

	editProfileDetails:(data ,cb,data2)=>request(data, cb, EDIT_PROFILE_DETAILS,data2),
};
async function request(requestData, cb, featureURL, secureRequest = buildHeader()) {
	const url = featureURL.url;
	if (!live) {
		console.groupCollapsed('API REQUEST');
		console.log({ featureURL });
		console.log({ secureRequest });
		console.log({ requestData });
		console.log({ url });
		console.groupEnd();
	}

	try {
		let response;

		if (featureURL.type === 'GET') {
		
			response = await axios.get(url, {
				headers: secureRequest,
				params: requestData,
			});
		} else if ('POST|PATCH|PUT'.includes(featureURL.type)) {
			response = await axios[featureURL.type.toLocaleLowerCase()](url,requestData, {
				headers: secureRequest,
			});
		} else if ('DELETE'.includes(featureURL.type)) {
			response = await axios.create({ headers: secureRequest }).delete(url);
		}
		if (!live) {
			console.groupCollapsed('API RESPONSE');
			console.log({ response });
			console.groupEnd();
		}
		if (cb.complete) cb.complete();

		if (response.status === 200) {
			cb.success(response.data);
		} else {
			cb.error(response.data);
		}
	} catch (error) {
		//    if(!live){console.log({error})}else{null};
		//console.log({error});
		if (cb.complete) cb.complete();
		if (error.response) {
			cb.error(error.response.data);
		} else {
			cb.error(error);
		}
	}
}
