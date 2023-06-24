const Products = require('../../../db/models/productSchema');
const modelateDataPaginado = require('../../../utils/modelateDataPaginate');

const getControllerProducts = async () => {
	const allProducts = await Products.find({})
		.select({
			name: 1,
			images: { $slice: -1 },
			'size.size': 1,
			brand: 1,
			price: 1,
		})
		.lean()
		.exec();

	const products = [];
	for (const product of allProducts) {
		const sameCodeProducts = await Products.find({
			articleCode: product.articleCode,
		})
			.select({
				name: 1,
				images: { $slice: -1 },
				size: { $slice: -1 },
				brand: 1,
				price: 1,
				articleCode: 1,
			})
			.lean()
			.exec();
		const productWithSameCode = { ...product, sameCode: sameCodeProducts };
		products.push(productWithSameCode);
	}

	return products;
};

module.exports = getControllerProducts;
