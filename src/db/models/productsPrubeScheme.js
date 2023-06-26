const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productPruebaSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	category: {
		type: String,
		required: true,
		// enum: []
	},

	gender: {
		type: String,
		required: true,
		enum: ['male', 'female', 'child'],
	},

	size: {
		type: [
			{
				size: {
					type: String,
					required: true,
				},
				stock: {
					type: Number,
					required: true,
					min: 0,
				},
			},
		],
		required: true,
	},

	color: {
		type: [String],
		required: true,
	},

	season: {
		type: String,
		required: true,
		enum: ['spring', 'summer', 'atumn', 'winter'],
	},

	images: {
		type: [String],
		required: true,
	},

	stock: {
		type: Number,
		required: true,
		min: 0,
	},

	isActive: {
		type: Boolean,
		required: true,
		default: true,
	},

	brand: {
		type: [String],
		required: true,
	},

	price: {
		type: Number,
		required: true,
	},

	articleCode: {
		type: String,
		required: true,
	},
});

const ProductPrueba = mongoose.model('ProductsPueba', productPruebaSchema);

module.exports = ProductPrueba;