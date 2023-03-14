module.exports = (req, res) => {
    if (req.method != 'POST') {
        res.status(400).send("This endpoint only accepts POST requests")
    }
    const {message, interview} = req.body

    res.status(200).send(interview ? "I'm excited to meet the team! Thanks for taking the time to look at my application." : "Thanks for taking the time to look at my application!")
}