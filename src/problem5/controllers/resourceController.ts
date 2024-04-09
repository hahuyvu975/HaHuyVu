import { Request, Response } from "express";
import resources from "../data/data";

// Create Resouce
export const createResource = (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const requiredField = ["name", "description"];

    if (!requiredField.every((field) => req.body[field])) {
      return res.status(403).send({
        success: false,
        message: "All fields are required!",
      });
    }

    const newResource = { id: resources.length + 1, name, description };
    resources.push(newResource);
    return res.status(200).json({
      success: true,
      message: "Create resource successfully",
      newResource,
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error in create resource",
      success: false,
      error: error,
    });
  }
};

// List Resources
export const listResources = (req: Request, res: Response) => {
  try {
    if (resources.length === 0) {
      return res.status(200).json({
        success: true,
        message: "Empty list",
        resources,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "List resource",
        resources,
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error in get list resources",
      error: error,
    });
  }
};

// Filter By Name
export const filterResourceByName = (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(403).json({
        success: false,
        message: "Not found by name",
      });
    }

    const filteredResources = resources.filter(
      (resource) => resource.name === name
    );

    if (filteredResources.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No resources found with the specified name",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resources filtered by name",
      resources: filteredResources,
    });

  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error in retrieving resources",
      error: error,
    });
  }
};

// Filter By Id
export const getResourceById = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const resource = resources.find((r) => r.id === id);
    if (!resource) {
        return res.status(403).json({
        success: false,
        message: `Not found resource by this id`,
      });
    } else {
        return res.status(200).json({
        success: true,
        message: "Find resource successfully",
        resource,
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error in get resources",
      error: error,
    });
  }
};

// Updated By Id
export const updateResource = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    const resource = resources.find((r) => r.id === id);
    if (!resource) {
        return res.status(403).json({ 
            success: false,
            message: "Not found resource" 
        });
    } else {
      resource.name = name;
      resource.description = description;
      return res.status(200).json({
        success: true,
        message: "Updated resource successfully",
        resource,
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Error in update resource",
      error: error,
    });
  }
};

// Remove by Id
export const deleteResource = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const index = resources.findIndex((r) => r.id === id);
    if (index === -1) {
        return res.status(403).json({
        success: false,
        message: "Not found resource",
      });
    } else {
      resources.splice(index, 1);
      return res.status(200).json({
        success: true,
        message: "Deteled resource successfully",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Error in delete resource",
    });
  }
};
