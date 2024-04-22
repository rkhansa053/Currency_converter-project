import inquirer from "inquirer";
let c_value = {
    PKR: 278.54,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Converting From",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        type: "list",
        name: "to",
        message: "Converting To",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: "Your amount to convert: "
    }
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
