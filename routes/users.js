import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";

uuidv4();

const router = express.Router();

let users = [];

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id",updateUser);

export default router;
