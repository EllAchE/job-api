const { sendMessage } = require("../telegram")

module.exports = async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.send("This endpoint only accepts POST requests")
        }
        else if (!req.body) {
            res.status(400).send("POST requests to this endpoint must have a body")
        }
        else if (req.headers['content-type'] != "application/json") {
            res.status(400).send("POST body must have content-type of application/json!")
        }
        else {
            const {message, interview} = req.body
            if (!message && !interview) {
                res.status(400).send("At least one of message and interview must be provided!")
            }   
            else {
                let msg = "Thanks for taking the time to look at my application."
                if (interview) {
                    msg = "I'm excited to meet the team! " + msg
                    await sendMessage(message + "\nWants interview")
                }
                else {
                    await sendMessage(message + "\nNo interview")
                }

                res.send(msg)
            }
        }
    }
    catch (err) {
        res.status(500).send("Unable to handle your request. This endpoint only accepts POST requests with application/json content type.")
    }
}