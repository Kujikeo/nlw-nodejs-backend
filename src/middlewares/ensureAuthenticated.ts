import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  ///receber o token
  const authtoken = request.headers.authorization;

  //validar se tiken ta preenchido
  if (!authtoken) return response.status(401).json({ message: "Token missed" });
  // validar token se é válido
  const [, token] = authtoken.split(" ");
  try {
    const { sub } = verify(
      token,
      "b791684efbe3f710e113905ce2713f6e"
    ) as IPayload;

    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).end();
  }

  //recuperar iformações do usuário
}
