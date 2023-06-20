const Products = require('../../../db/models/productSchema');
const modelateDataPaginado = require('../../../utils/modelateDataPaginate');

const getControllerSearch = async (page, query) => {

	// const filter = {};
	// 	for (const key in query) {
	// 		if (query.hasOwnProperty(key)) {
	// 			if (['color', 'brand', 'season'].includes(key)) {
	// 				filter[key] = {
	// 					$in: query[key].split(','),
	// 				};
	// 			} else if (key === 'size') {
	// 				const sizes = query[key];
	// 				const regexSizes = sizes.split(',').join('|');
	// 				filter[key] = {
	// 					$regex: new RegExp(`\\b(${regexSizes})\\b`, 'i'),
	// 				};
	// 			} else if (['category', 'gender', 'name'].includes(key)) {
	// 				filter[key] = { $regex: new RegExp(query[key], 'i') };
	// 			}
	// 		}
	// 	}

	// 	const queryResult = await Products.find(filter);
	//   const products = [];
	//   for (const product of queryResult) {
	//     let code = product.articleCode
	//     const sameCodeProducts = await Products.find({
	//       $and: [{ _id: { $ne: product.id } }, { articleCode: code }],
	//     });
	//     const productWithSameCode = { ...product.toObject(), sameCode: sameCodeProducts };
	//     delete productWithSameCode._doc;
	//     products.push(productWithSameCode);
	//   }
	//   const response = modelateDataPaginado(page, products);
	// -------
	const result = await Products.find(query)
	let products = []

	for (const i in result) {
		const sameCode = await Products.find({ ...query,
			articleCode: result[i].articleCode,
			_id: {$ne: result[i]._id}})
			
		const { _id, name, category, gender, size, color, season,
			images, stock, isActive, brand, price, articleCode, __v } = result[i]

		products.push({
			_id, name, category, gender, size, color, season, images,
			stock, isActive, brand, price, articleCode, sameCode: sameCode, __v
		})
	}

	const response = modelateDataPaginado(page, products)
  	return response;
};


module.exports = getControllerSearch;
