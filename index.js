const barCanvas = document.getElementById("myChart");

const myChart1 = new Chart(barCanvas, {
	type: "bar",
	responsive: true,
	data: {
		labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
		datasets: [
			{
				data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
				backgroundColor: [
					"rgb(236, 119, 95)",
					"rgb(236, 119, 95)",
					"rgb(236, 119, 95)",
					"rgb(236, 119, 95)",
					"rgb(236, 119, 95)",
					"rgb(236, 119, 95)",
					"rgb(236, 119, 95)",
				],
				hoverBackgroundColor: ["rgb(118, 181, 188)"],
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
        
	},
});
