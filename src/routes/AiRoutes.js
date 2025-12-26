import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
// import ConnectionAiAPI from "../model/AI/ConnectedAI.js";
import main from "../model/AI/ConnectedAI.js";
router.use(express.json());

router.use(auth);

router.post("/message/check", async (req, res) => {
  const { message } = req.body;

  // response AI

  const response = await main(message);

  res.json({
    status: 200,
    data: {
      chatResponse: response,
    },
  });
});

export default router;
