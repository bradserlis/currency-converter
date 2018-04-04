const access_key = "7096227d08beef4d32e58f6a442119de";
const euroToDollarRate = 0.81459692522;
let currencyType = "";


function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    $.get("http://data.fixer.io/api/latest?access_key=7096227d08beef4d32e58f6a442119de", (response)=>{
		switch(event.target.value){
			case "EUR":
			value = response["rates"]["EUR"];
			currencyType = " EUR"
			break;
			case "GBP":
			value = response["rates"]["GBP"];
			currencyType = " GBP"
			break;
			case "CNY":
			value = response["rates"]["CNY"];
			currencyType = " CNY"
			break;
			case "JPY":
			value = response["rates"]["JPY"];
			currencyType = ' JPY'
			break;
			default:
			break;
		}
	result = 1/response['rates']["USD"]*$('#dataEntered').val() * value
	console.log(result);
	$('#output_amount').append("<p>"+result+currencyType+"</p>")
	})

 }
}


document.body.addEventListener('click', convertCurrency);

