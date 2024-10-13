function copyAmount() {
    const amount = "₹ 5000"; // Feel free to make this dynamic
    navigator.clipboard.writeText(amount).then(() => {
        showModal('copyModal', "Amount copied: " + amount);
    });
}

function copyUPI() {
    const upi = "unicashofficial02@okhdfcbank"; // Feel free to make this dynamic
    navigator.clipboard.writeText(upi).then(() => {
        showModal('copyModal', "UPI ID copied: " + upi);
    });
}

function showModal(modalId, message) {
    document.getElementById(modalId).style.display = "block";
    if (message) {
        document.getElementById("copyMessage").innerText = message;
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.getElementById("submitUtrButton").onclick = function() {
    showModal('utrModal');
}

document.getElementById("confirmButton").onclick = function() {
    alert("UTR submitted successfully!");
    closeModal('utrModal');
}

// Info button
document.getElementById("infoButton").onclick = function() {
    showModal('infoModal');
}
