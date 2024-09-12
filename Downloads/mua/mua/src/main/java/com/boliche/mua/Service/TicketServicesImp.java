package com.boliche.mua.Service;


import com.boliche.mua.Repository.TicketRepository;
import com.boliche.mua.models.Ticket;
import com.boliche.mua.models.UserBuyer;
import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.preference.PreferenceBackUrlsRequest;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class TicketServicesImp implements TicketServices {

    @Value("${codigo.mercadopago}")
    private String mercadopagotoken;
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public String postTicket(UserBuyer userBuyer) {
        System.out.println("postTicket");
        //mandar el mail con la entradas
        if (userBuyer == null) {
            return "error";
        }
        String title = userBuyer.getTitle();
        Integer quantity = userBuyer.getQuantity();
        BigDecimal unit_price = userBuyer.getUnit_price();
        try {
            MercadoPagoConfig.setAccessToken(mercadopagotoken);
            PreferenceItemRequest itemRequest = PreferenceItemRequest.builder()
                    .title(title)
                    .quantity(quantity)
                    .unitPrice(unit_price)

                    .currencyId("ARS")
                    .build();
            List<PreferenceItemRequest> items = new ArrayList<>();
            items.add(itemRequest);
            PreferenceBackUrlsRequest backUrls = PreferenceBackUrlsRequest.builder()
                    .success("https://www.example.com/success")
                    .pending("https://www.example.com/success")
                    .failure("https://www.example.com/success")
                    .build();
            PreferenceRequest preferenceRequest =PreferenceRequest.builder()
                    .items(items)
                    .backUrls(backUrls)
                    .build();
            PreferenceClient client = new PreferenceClient();
            Preference preference = client.create(preferenceRequest);
            return  preference.getId();
        } catch (MPException | MPApiException e) {
            System.out.println(e.getMessage());
            if (e instanceof MPApiException) {
                MPApiException apiException = (MPApiException) e;
                System.out.println("Status Code: " + apiException.getStatusCode());

            }
        }

        return "Succesfuly post";

    }
}
