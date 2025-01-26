
document.getElementById('calculate').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('value').value);
    const fee = parseFloat(document.getElementById('fee').value);
    const time = parseInt(document.getElementById('time').value);

    if (isNaN(value) || isNaN(fee) || isNaN(time) || value <= 0 || fee <= 0 || time <= 0) {
        alert('Por favor, insira valores válidos!');
        return;
    }

    const i = fee / 100; // taxa de juros mensal
    const n = time; // número de parcelas
    const pmt = (value * i) / (1 - Math.pow(1 + i, -n)); // fórmula da parcela fixa

    const totalPago = pmt * n;

    // Exibindo o valor da parcela e o total pago
    document.getElementById('parcel').innerHTML = "Parcela: R$ " + pmt.toFixed(2);
    document.getElementById('total').innerHTML = "Total Pago: R$ " + totalPago.toFixed(2);
});