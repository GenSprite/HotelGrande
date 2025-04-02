function updateRoomDetails() {
    var roomType = document.getElementById("roomType").value;
    var roomDetails = "";
    
    switch (roomType) {
        case "Executive":
            roomDetails += "View: Pool View\n";
            roomDetails += "Inclusions: King-sized bed, Balcony, Free Wi-Fi, TV, Mini Fridge, Complimentary Breakfast\n";
            break;
        case "Family":
            roomDetails += "View: Garden View\n";
            roomDetails += "Inclusions: Queen-sized bed, Free Wi-Fi, TV, Mini Fridge, Complimentary Breakfast\n";
            break;
        case "Economy":
            roomDetails += "View: City View\n";
            roomDetails += "Inclusions: Twin beds, Free Wi-Fi, TV, Mini Fridge\n";
            break;
        default:
            roomDetails += "Inclusions: Standard room amenities\n";
    }
    
    document.getElementById("roomDetails").textContent = roomDetails;
}

function togglePriceDetails() {
    var details = document.getElementById("priceDetails");
    details.style.display = details.style.display === "none" || details.style.display === "" ? "block" : "none";
}
