import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplimetRepositories extends Repository<Compliment> {}

export { ComplimetRepositories };
