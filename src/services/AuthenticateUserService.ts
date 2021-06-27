import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    //verificar se email existe
    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw Error("Email/Password incorrect.");
    }
    //verificar senha correta
    const paswordValidate = await compare(password, user.password);
    if (!paswordValidate) {
      throw Error("Email/Password incorrect.");
    }

    //gerar o token
    const token = sign(
      { email: user.email },
      "b791684efbe3f710e113905ce2713f6e",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
export { AuthenticateUserService };
