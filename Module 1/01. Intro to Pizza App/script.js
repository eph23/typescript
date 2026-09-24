"use strict";

let menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQue = [];

const addNewPizza = function (pizzaObj) {
    menu.push(pizzaObj);
};

const placeOrder = function (pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => (pizzaObj.name = pizzaName));
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQue.push(newOrder);
    return newOrder;
};

const completeOrder = function (orderId) {
    const order = orderQue.find((order) => order.id === orderId);
    order.status = "COMPLETED";
    return order;
};

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
