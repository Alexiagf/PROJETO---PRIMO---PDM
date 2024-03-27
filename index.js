document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function primeNumber() {
    var number = parseInt(document.getElementById('valorUsuario').value);
    var primo = true;
    for (var divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            primo = false;
            document.getElementById("resultado").innerText = "Nao, o número " + number + " é primo.";
            return;
        }
    }
    document.getElementById("resultado").innerText = "Sim, o número " + number + " não é primo.";
}
