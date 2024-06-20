const Letter = require('../models/letter');

exports.renderForm = (req, res) => {
    res.render('index');
};

exports.submitLetter = async (req, res) => {
    try {
        const { fullName, email, letterContent } = req.body;
        const letter = new Letter({ fullName, email, letterContent });
        await letter.save();
        res.status(201).json({ message: 'Письмо успешно отправлено!', letter });
    } catch (error) {
        res.status(500).json({ message: 'Произошла ошибка', error });
    }
};

exports.getLetters = async (req, res) => {
    try {
        const letters = await Letter.find();
        res.render('letters', { letters });
    } catch (error) {
        res.status(500).json({ message: 'Произошла ошибка', error });
    }
};
