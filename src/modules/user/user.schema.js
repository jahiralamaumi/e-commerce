const yup = require('yup');

// Schema creation
const createUserSchema = yup.object().shape({
    name: yup.string()
            .min(2, "Must be at least two characters.")
            .max(50, "Maximum 30 characters")
            .required("Name is required"),
    email: yup.string()
            .email("Enter a valid email")
            .required("Email is required")
});

module.exports.createUserSchema = createUserSchema;