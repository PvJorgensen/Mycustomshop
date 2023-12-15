import Genders from "../Models/gender.model.js";
import User from "../Models/user.model.js";


Genders.hasMany(User);

export default class GendersController {

    listall = async () => {
        const result = await Genders.findAll();
        return result
    }

    getone = async (id) => {
        const result = await Genders.findByPk(id);
        return result
    }

    create = async (data) => {
        const result = await Genders.create(data);
        return result
    }

    update = async (data) => {
        const result = await Genders.update(data, { where: { id: data.id}});
        return result
    }

    delete = async (id) => {
        const result = await Genders.destroy({where: { id: id} } );
        return result
    }

}