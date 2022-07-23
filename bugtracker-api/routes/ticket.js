//IMPORT EXPRESS, ROUTER, AND SECURITY MIDDLEWARE
const express = require("express")
const router = express.Router()
const Tickets = require("../models/ticket")
const security = require("../middleware/security")



//FUNCTION TO LIST ALL THE TICKETS FOR A SELECTED PROJECT 
router.get("/", security.requireAuthenticatedUser, async(req,res,next) => {
    try
    {
        console.log("Entered get function")
        //Retrieve the user information from the local server
        const {user} = res.locals

        //Call the listAllTickets function to get a list of all the tickets from a specific project
        //Request body should have the projectId
        const ticketList = await Tickets.listAllTickets({user: user, projectId: req.body.projectId})
        
        //Return the list of all the tickets if successful
        return res.status(200).json({ticketList: ticketList})
    }
    catch(error)
    {
        next(error)
    }
})





//FUNCTION TO CREATE A NEW TICKET
router.post("/", security.requireAuthenticatedUser, async(req,res,next) => {
    try
    {
        //Retrieve the user information from the local server
        const {user} = res.locals

        //Call the createTicket function to add a new ticket to the database and update projects table
        //Request must have the developers (array of emails), projectId, title, description, category, priority, status and complexity
        const ticket = await Tickets.createTicket({user: user, ticketInfo: req.body})
        
        //Return the new ticket information if successful
        return res.status(201).json({ticket: ticket})
    }
    catch(error)
    {
        next(error)
    }
})






//FUNCTION TO FETCH DETAILS FOR A SPECIFIC TICKET
router.get("/:ticketId", security.requireAuthenticatedUser, async(req,res,next) => {
    try
    {
        //Retrieve the ticket id from the given url
        const {ticketId} = req.params

        //Retrieve the user information from the local server
        const {user} = res.locals

        //Call the fetchTicketById to find specific ticket information
        //Must provide the ticket id from the url
        const ticket = await Tickets.fetchTicketbyId({ticketId: ticketId, user: user})
        
        //Return the specific ticket information if successful
        return res.status(200).json({ticket: ticket})
    }
    catch(error)
    {
        next(error)
    }
})






//FUNCTION TO UPDATE TICKET INFORMATION
router.patch("/:ticketId/update", security.requireAuthenticatedUser, async(req,res,next) => {
    try
    {
        //Retrieve the ticket id from the given url
        const {ticketId} = req.params

        //Retrieve the user information from the local server
        const {user} = res.locals

        //Call the updateTicketInfo function to update the ticket information
        //Request body have the name of the field to update and new field value
        const updatedTicket = await Tickets.updateTicketInfo({ticketId: ticketId, ticketInfo: req.body, user: user})
        
        //Return the new ticket information if successful
        return res.status(200).json({ticket: updatedTicket})
    }
    catch(error)
    {
        next(error)
    }
})




//MODULE EXPORTS
module.exports = router