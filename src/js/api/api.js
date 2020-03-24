import axios from 'axios';
import { buildHeader, ipInfoHeader } from './helpers';
import { ROOT_URL } from './globals';


//App API's
const live = false;

const GET_PRODUCT = { type: 'GET', url: ROOT_URL + 'defaultTopRatingProduct/' };
const GET_ALL_PRODUCT = { type: 'GET', url: ROOT_URL + 'commonProducts/' };
// const GET_PRODUCT_BY_CATEG = { type: 'GET', url: ROOT_URL+'getProductByCateg/' };
// const GET_PRODUCT_BY_COLOR = { type: 'GET', url: ROOT_URL+'getProductBycolor/' };

const GET_ALL_CATEGORIES={type:'GET',url:ROOT_URL+'getAllCategories/'};
const GET_ALL_COLORS={type:'GET',url:ROOT_URL+'getAllColors/'};
const REGISTER ={type :'POST',url:ROOT_URL+'register/' };
const LOG_IN ={ type : 'POST' ,url:ROOT_URL + 'login/'};
const ADD_ADDRESS={type:'POST',url:'http://localhost:3000/address'};
const ADD_TO_CART ={type :'POST',url:ROOT_URL+'addDataToCart/' };
export const API = {
	getProduct: (data, cb) => request(data, cb, GET_PRODUCT),
	getAllCategories: (data, cb) => request(data, cb, GET_ALL_CATEGORIES),
	getAllColors: (data, cb) => request(data, cb, GET_ALL_COLORS),
	getAllProduct: (data, cb) => request(data, cb, GET_ALL_PRODUCT),
	
	getProductByCateg: (data, cb) => {
		// console.log("data inside api file",data)
		// console.log("produccateg uyrl", GET_PRODUCT_BY_CATEG)

		// GET_PRODUCT_BY_CATEG.url = GET_PRODUCT_BY_CATEG.url + data;
		// return request({}, cb, GET_PRODUCT_BY_CATEG)
		return request({}, cb, { type: 'GET', url: `${ROOT_URL}getProductByCateg/${data}`})
		
	},

	// getProductByCateg: (data, cb) => {
	// 	//GET_PRODUCT_BY_CATEG.url = GET_PRODUCT_BY_CATEG.url + data;
	// 	return request({}, cb, { type: 'GET', url: `${ROOT_URL}getProductByCateg/${data}` })
	// },

	getProductByColor: (data, cb) => {
		// GET_PRODUCT_BY_COLOR.url = GET_PRODUCT_BY_COLOR.url + data;
		// return request({}, cb, GET_PRODUCT_BY_COLOR)
		return request({}, cb, { type: 'GET', url: `${ROOT_URL}getProductBycolor/${data}` })
	},


	getProductById: (data, cb) => {
		return request({}, cb, { type: 'GET', url: `${ROOT_URL}getProductByProdId/${data}` })
	},
	addtocart:(data ,cb)=>request(data, cb, ADD_TO_CART),
	register:(data ,cb)=>request(data, cb, REGISTER),
	logIn:(data,cb)=> request(data,cb,LOG_IN ),

	addAddress:(data,cb)=>request(data,cb,ADD_ADDRESS)



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

		if (featureURL.type == 'GET') {
		
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

		if (response.status == 200) {
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
