const express = require("express");
const { TicketModel } = require("../Models/Ticket.model");

const ticketRoutes = express.Router();


// Inserting all the 80 Tickets at once using insertmany()
ticketRoutes.post("/add", async(req,res) => {

    const payload = req.body;

    try { 
        const tickets = await TicketModel.insertMany(payload);
        res.status(201).send({message:"Ticket Inserted", tickets});
    } 
    
    catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
});



module.exports = { ticketRoutes };