function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let service = document.getElementById('service').value;
  let clients = document.getElementById('clients').value;

  if (clients == '' || clients <= 1) {
    clients = 1;
    document.getElementById('each-one').style.display = 'none';
  } else {
    document.getElementById('result').style.display = 'block';
  }

  let total = (bill * service) / clients;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('result').style.display = 'block';

}

document.getElementById('result').style.display = 'none';

document.getElementById('tip-form').addEventListener('submit', calculateTip);