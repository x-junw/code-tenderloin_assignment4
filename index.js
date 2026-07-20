window.onload = async () => {
    document.querySelectorAll(".container").forEach((element) => {
        for (let i = 1; i <= 14; i++) {
            let newItem = document.createElement("div");
            newItem.className = "item";
            newItem.id = `item${i}`;
            element.appendChild(newItem);
        }
    });
}