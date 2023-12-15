import Product from "../Models/product.model.js";
import User from "../Models/user.model.js";
import Reviews from "../Models/review.model.js";


Reviews.belongsTo(User);
Reviews.belongsTo(Product);

export default class ReviewsController {

    listall = async () => {
        const result = await Reviews.findAll();
        return result
    }

    getone = async (id) => {
        const result = await Reviews.findByPk(id);
        return result
    }

    create = async (data) => {
        const result = await Reviews.create(data);
        return result
    }

    update = async (data) => {
        const result = await Reviews.update(data, { where: { id: data.id}});
        return result
    }

    delete = async (id) => {
        const result = await Reviews.destroy({where: { id: id} } );
        return result
    }

}