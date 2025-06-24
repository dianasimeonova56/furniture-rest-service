import Furniture from "../models/Furniture.js"

export default {
    create(furnitureData, ownerId) {
        return Furniture.create({...furnitureData, _ownerId: ownerId});
    },
    getAll() {
        return Furniture.find();
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId);
    },
    delete(furnitureId) {
        return Furniture.findByIdAndDelete(furnitureId)
    }
}