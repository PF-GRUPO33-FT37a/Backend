const Products = require('../../../db/models/productSchema');
const modelateDataPaginado = require('../../../utils/modelateDataPaginate');

const getControllerProducts = async (page) => {
	const allProducts = await Products.find({})
		.select({
			name: 1,
			images: { $slice: -1 },
			size: { $slice: -1 },
			brand: 1,
			price: 1,
		})
		.lean()
		.exec();
	const response = modelateDataPaginado(page, allProducts);
	return response;
};

module.exports = getControllerProducts;
