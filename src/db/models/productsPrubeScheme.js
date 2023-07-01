const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productPruebaSchema = new Schema({

	images: {
		type: [String],
		required: true,
	},

	// stock: {
	// 	type: Number,
	// 	required: true,
	// 	min: 0,
	// },

	
});



const ProductPrueba = mongoose.model('ProductsPueba', productPruebaSchema);

module.exports = ProductPrueba;
