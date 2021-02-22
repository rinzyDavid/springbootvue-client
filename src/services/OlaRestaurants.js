import axios from "axios";


const API_URL = "http://localhost:8386/api";



class OlaRestaurants{

	fetchAll(){

		return axios.get(`${API_URL}/restaurants/listall`);
	}


	searchRestaurant(city){

		return axios.get(`${API_URL}/searchrestaurant/${city}`);
	}

	listmenu(restaurantid){
		return axios.get(`${API_URL}/listmenu/${restaurantid}`);
	}

	listmeal(menuid){
		return axios.get(`${API_URL}/listmeals/${menuid}`);
	}

	placeorder(data){
		return axios.post(`${API_URL}/placeorder`,data);
	}


}

export default new OlaRestaurants();