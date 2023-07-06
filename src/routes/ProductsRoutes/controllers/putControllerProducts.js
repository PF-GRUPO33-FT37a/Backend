const Products = require('../../../db/models/productSchema');

const putControllerProducts = async (id, updatedData, firebaseUrls) => {
	let stockSum = 0;
	let arr = [];

	if (updatedData.size) {
		arr = updatedData.size.map((size) => {
			const obj = JSON.parse(size);
			obj.stock = parseInt(obj.stock);
			stockSum += obj.stock;
			return obj;
		});
	}

	const updatedFields = {
		...(updatedData.name && { name: updatedData.name }),
		...(updatedData.category && { category: updatedData.category }),
		...(updatedData.gender && { gender: updatedData.gender }),
		...(arr.length > 0 && { size: arr }),
		...(updatedData.color && { color: updatedData.color }),
		...(updatedData.season && { season: updatedData.season }),
		...(updatedData.images && { $push: { images: firebaseUrls } }),
		...(updatedData.brand && { brand: updatedData.brand }),
		...(updatedData.price && { price: updatedData.price }),
		...(updatedData.isActive !== undefined && {
			isActive: updatedData.isActive,
		}),
		...(updatedData.articleCode && { articleCode: updatedData.articleCode }),
	};

	if (firebaseUrls) {
		await Products.findByIdAndUpdate(id, { $push: { images: firebaseUrls } });
	}

	const productUpdate = await Products.findByIdAndUpdate(id, updatedFields, {
		new: true,
	});

	console.log(productUpdate);
	return productUpdate;
};

module.exports = putControllerProducts;
