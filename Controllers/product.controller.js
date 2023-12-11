import Brand from "../Models/brand.model.js";
import Products from "../Models/product.model.js";

Products.belongsTo(Brand)

export default class ProductController {

    listall = async () => {
        const result = await Products.findAll();
        return result
    }

    getone = async (id) => {
        const result = await Products.findByPk(id, {
            include: Brand
        });
        return result
    }

    create = async (data) => {
        const result = await Products.create(data);
        return result
    }

    update = async (data) => {
        const result = await Products.update(data, { where: { id: data.id}});
        return result
    }

    delete = async (id) => {
        const result = await Products.destroy({where: { id: id} } );
        return result
    }

}