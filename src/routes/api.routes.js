import { Router } from "express";
import { auth, next, reset, fetch } from "./../controllers/api.controller.js";
import { authenticateToken } from "./../controllers/auth.controller.js";

const router = Router();


router.post("/auth", auth);
router.get("/next", authenticateToken, next);
router.put("/current", authenticateToken, reset);
router.get("/current", authenticateToken, fetch);

module.exports = router;