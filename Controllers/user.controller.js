import Users from "../Models/user.model.js";
import Gender from "../Models/gender.model.js";
import Review from "../Models/review.model.js";

Users.belongsTo(Gender);
Users.hasMany(Review);

export default class UsersController {

    listall = async () => {
        const result = await Users.findAll();
        return result
    }

    getone = async (id) => {
        const result = await Users.findByPk(id);
        return result
    }

    create = async (data) => {
        const result = await Users.create(data);
        return result
    }

    update = async (data) => {
        const result = await Users.update(data, { where: { id: data.id}});
        return result
    }

    delete = async (id) => {
        const result = await Users.destroy({where: { id: id} } );
        return result
    }

}