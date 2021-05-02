const toggleButton = document.getElementById('powerbutton');
const label = document.querySelector('.toggle');

const prices = document.getElementsByClassName("price");

let originalPrices = [];

for(let x = 0; x < prices.length; x++){
	originalPrices.push(prices[x].innerHTML);
}


toggleButton.addEventListener("click", () => {
	
	if(toggleButton.classList == "clicked"){
		toggleButton.classList.add("notClicked");
		toggleButton.classList.remove("clicked");
			changePrice();
			return;
	}

	if(toggleButton.classList == "notClicked"){
		toggleButton.classList.remove("notClicked");
		toggleButton.classList.add("clicked");

		for(let x = 0; x < prices.length; x++){
			prices[x].innerHTML = originalPrices[x];
		}

		return;
	}

})

function changePrice(){
	
	let values = [];
	let valueJoin = [];

	
	for(let x = 0; x < prices.length; x++){

		values.push(prices[x].innerHTML.split(""));
		
		values[x].shift();
		valueJoin.push(values[x].join(""));	

		valueJoin[x] = (parseInt(valueJoin[x]) / 10 + 0.09).toFixed(2)

		prices[x].innerHTML = `$ ${valueJoin[x]}`;
	}

}


