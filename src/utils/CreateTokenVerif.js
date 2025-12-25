import crypto from "crypto";

const CreateTokenVerif = async () => {
  const tokenVerif = await crypto.randomBytes(3).toString("hex");
  return tokenVerif;
};

export default CreateTokenVerif;
