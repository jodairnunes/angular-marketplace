export class Film {
	id?: number;
	name: string;
	category: string;
	imgLink: string;
	price: number;

	constructor(id: number, name: string, catefory: string, imgLink: string, price: number) {
		this.id = id;
		this.name = name;
		this.category = catefory;
		this.imgLink = imgLink;
		this.price = price;
	}
}