package com.boliche.mua.Controllers;

import com.boliche.mua.Service.TicketServices;
import com.boliche.mua.models.Ticket;
import com.boliche.mua.models.UserBuyer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/tickets")
public class TicketControllers {

    @Autowired
    private TicketServices ticketServices;

    @PostMapping("/mp")
    public String postTicket(@RequestBody UserBuyer userBuyer){
        return ticketServices.postTicket(userBuyer);
    }
}
