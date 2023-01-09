console.log("----- iFarmjobs | Server.js -----");


var ESX = exports[Config.extended].getSharedObject();

Tools.RegisterServEvent("iFarmjobs:pay", (salary) => {
    var xPlayer = ESX.GetPlayerFromId(source);
    xPlayer.addMoney(salary);
});
