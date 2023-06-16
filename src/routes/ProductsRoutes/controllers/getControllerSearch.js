const Products = require('../../../db/models/productSchema');
const modelateDataPaginado = require('../../../utils/modelateDataPaginate');

const getControllerSearch = async (page, query) => {
	const filter = {};
	for (const key in query) {
		if (query.hasOwnProperty(key)) {
			if (['color', 'size', 'brand', 'season'].includes(key)) {
				filter[key] = { $in: query[key].split(',') };
			} else if (['category', 'gender', 'name'].includes(key)) {
				filter[key] = { $regex: new RegExp(query[key], 'i') };
			}
		}
	}
	const queryResult = await Products.find(filter);
	const response = modelateDataPaginado(page, queryResult);
	return response;
};

module.exports = getControllerSearch;
