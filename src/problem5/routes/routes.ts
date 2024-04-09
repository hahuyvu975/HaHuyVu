import express from "express";

import {
  createResource,
  listResources,
  getResourceById,
  updateResource,
  deleteResource,
  filterResourceByName,
} from "../controllers/resourceController";

const router = express.Router();

router.post("/resources", createResource);
router.get("/resources", listResources);
router.get("/resources/:id", getResourceById);
router.get("/resource", filterResourceByName);
router.put("/resources/:id", updateResource);
router.delete("/resources", deleteResource);


export default router;
