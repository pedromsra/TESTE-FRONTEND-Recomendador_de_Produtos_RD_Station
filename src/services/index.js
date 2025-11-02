import axios from 'axios';
import { getProducts as _getProducts } from './product/product.service';

export * from './recommendation/recommendation.service';
export const baseURL = 'http://localhost:3001';


export const getProducts = () => _getProducts(axios);
