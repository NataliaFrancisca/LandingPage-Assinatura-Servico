const toggleButton = document.getElementById('powerbutton');
const label = document.querySelector('.toggle');

const prices = document.getElementsByClassName("price");

let originalPrices = [];

for(let x = 0; x < prices.length; x++){
	originalPrices.push(prices[x].innerHTML);
}


toggleButton.addEventListener("click", () => {
	

	if(toggleButton.classList == "clicked"){
		changePrice();
		toggleButton.classList.add("onclicked");
		toggleButton.classList.remove("clicked");
		return;
	}

	if(toggleButton.classList == "onclicked"){
		toggleButton.classList.remove("onclicked");
		toggleButton.classList.add("clicked");

		for(let x = 0; x < prices.length; x++){
			prices[x].innerHTML = originalPrices[x];
		}

		return;
	}

})



function changePrice(){
	
	let teste = [];
	let valueJoin = [];

	
	for(let x = 0; x < prices.length; x++){

		teste.push(prices[x].innerHTML.split(""));
		
		teste[x].shift();
		valueJoin.push(teste[x].join(""));	

		valueJoin[x] = (parseInt(valueJoin[x]) / 10 + 0.09).toFixed(2)

		prices[x].innerHTML = `$ ${valueJoin[x]}`;
	}

}


