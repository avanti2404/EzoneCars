const ContactSchema = require("../schema/contactSchema");

exports.addContactInfo = async (req, res) => {
    try {
        const { name, email, subject, message} = req.body;

        console.log(name, email, subject, message);
        
        const newContact = await ContactSchema.create({
            name: name,
            email: email,
            subject: subject,
            message: message
        });

        res.status(201).json({
            success: true,
            data: newContact
        });
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.getContactDetails = async (req, res) => {
    try {
        const contacts = await ContactSchema.find({});
        res.json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};