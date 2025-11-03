import axios from 'axios';
import { getProducts as _getProducts } from './product/product.service';

export { getRecommendations } from './recommendation/recommendation.service';

export const getProducts = () => _getProducts(axios);
