import { Product } from "../entity/product";
import { BaseRepository } from "./repository";

export class ProductRepository extends BaseRepository<Product>{
    getAllProducts(): Product[] {
        let products = this.getAll();

        return products;
    }
}