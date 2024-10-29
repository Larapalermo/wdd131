const trips = [
    {
        id: "ab-0001",
        name: "Mendoza temple",
        averagerating: 4.5
    },
    {
        id: "cd-0002",
        name: "Miramar",
        averagerating: 4.7
    },
    {
        id: "de-0003",
        name: "Villa General Belgrano",
        averagerating: 3.5
    },
    {
        id: "fg-0004",
        name: "Traslasierra",
        averagerating: 3.9
    },
    {
        id: "hi-0005",
        name: "Pinamar",
        averagerating: 5.0
    }
];

function populateTripSelect() {
    const TripSelect = document.getElementById('tripSelect');

    trips.forEach(trip => {
        const option = document.createElement('option');
        option.value = trip.id;
        option.textContent = trip.name;
        tripSelect.appendChild(option);
    });
}

window.onload = populateTripSelect;