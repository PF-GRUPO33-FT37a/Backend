const Products = require('../../../db/models/productSchema');

const postControllerProduct = async (data, firebaseUrls) => {
	console.log(data);
	// const stockSum = data.size.reduce((acc, obj) => acc + obj.stock, 0);
	let stockSum = 0;
	for (let i = 0; i < data.size.length; i++) {
		stockSum += data.size[i].stock;
	}

	const product = {
		name: data.name,
		category: data.category,
		gender: data.gender,
		size: data.size,
		color: data.color,
		season: data.season,
		images: firebaseUrls,
		stock: stockSum,
		brand: data.brand,
		price: data.price,
		articleCode: data.articleCode,
	};

	const result = Products.create(product);
	return result;
};

module.exports = postControllerProduct;
