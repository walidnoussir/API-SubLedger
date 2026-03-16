import { body, param, validationResult } from "express-validator";

// ─── Handle Validation Errors ──────────────────────────────────────────────────
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

// ─── Create Subscription Validation ───────────────────────────────────────────
export const validateCreateSubscription = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("billingCycle").notEmpty().withMessage("Billing cycle is required"),

  handleValidationErrors,
];

// ─── Update Subscription Validation ───────────────────────────────────────────
export const validateUpdateSubscription = [
  param("id")
    .notEmpty()
    .withMessage("Subscription ID is required")
    .isMongoId()
    .withMessage("Invalid subscription ID"),

  body("name")
    .trim()
    .isEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("price").isEmpty().withMessage("Price must be a positive number"),

  body("billingCycle")
    .isEmpty()
    .withMessage("Billing cycle must be a valid date"),

  handleValidationErrors,
];
