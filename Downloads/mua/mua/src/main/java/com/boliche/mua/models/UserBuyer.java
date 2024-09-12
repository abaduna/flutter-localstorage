package com.boliche.mua.models;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class UserBuyer {
    private  String title;
    private int quantity;
    private BigDecimal unit_price;
}
