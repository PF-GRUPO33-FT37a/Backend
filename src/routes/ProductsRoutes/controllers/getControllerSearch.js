const Products = require('../../../db/models/productSchema');
const modelateDataPaginado = require('../../../utils/modelateDataPaginate');

const getControllerSearch = async (page, query) => {
<<<<<<< HEAD
	const filter = {};
	for (const key in query) {
		if (query.hasOwnProperty(key)) {
			if (['color', 'brand', 'season'].includes(key)) {
				filter[key] = {
					$in: query[key].split(','),
				};
			} else if (key === 'size') {
				const sizes = query[key];
				const regexSizes = sizes.split(',').join('|');
				filter[key] = {
					$regex: new RegExp(`\\b(${regexSizes})\\b`, 'i'),
				};
			} else if (['category', 'gender', 'name'].includes(key)) {
				filter[key] = { $regex: new RegExp(query[key], 'i') };
			}
		}
	}

	const queryResult = await Products.find(filter);
	const products = [];
	for (const product of queryResult) {
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
			.exec();
		const productWithSameCode = {
			...product.toObject(),
			sameCode: sameCodeProducts,
		};
		delete productWithSameCode._doc;
		products.push(productWithSameCode);
	}
	const response = modelateDataPaginado(page, products);
	return response;
=======
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
  const products = [];
  for (const product of queryResult) {
    const sameCodeProducts = await Products.find({ articleCode: product.articleCode })
      .select({
        name: 1,
        images: { $slice: -1 },
        size: { $slice: -1 },
        brand: 1,
        price: 1,
        articleCode: 1
      })
      .exec();
    const productWithSameCode = { ...product.toObject(), sameCode: sameCodeProducts };
    delete productWithSameCode._doc;
    products.push(productWithSameCode);
  }
  const response = modelateDataPaginado(page, products);
  return response;
>>>>>>> 836e2830f709a71d9da9b6ebf5db5b3e0779af65
};


module.exports = getControllerSearch;
