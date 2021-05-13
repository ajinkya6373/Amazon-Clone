const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { app } = require("firebase-admin");
const { response, request } = require("express");
const stripe = require('stripe')('sk_test_51Ip9lHSB6geyqnQ7LYEj4pE4N7SM5av5mlytiLNulYzizLvFuMRSo77i9hLMxQ2V1RdYUUBi1fXFG3zFdy3VIsJi0039LhVe61');

//API

// App config 

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//Api routers
app.get('/',(request,response) => response.status(200).send('hello world'))
app.post('/payments/create',async(request,response) =>{
    const total = request.query.total;
    console.log("Payment request Recieved ..",total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency:"usd"
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })

})


// listen command 
exports.api = functions.https.onRequest(app)