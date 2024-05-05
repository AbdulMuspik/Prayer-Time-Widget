// Retrieve saved prayer times from localStorage or set default times
const defaultTimes = {
    fajr: "04:30",
    dhuhr: "12:30",
    asr: "15:30",
    maghrib: "18:00",
    isha: "20:00"
};

const savedTimes = JSON.parse(localStorage.getItem("prayerTimes")) || defaultTimes;

// Update input fields with saved times
document.getElementById("fajr-time").value = savedTimes.fajr;
document.getElementById("dhuhr-time").value = savedTimes.dhuhr;
document.getElementById("asr-time").value = savedTimes.asr;
document.getElementById("maghrib-time").value = savedTimes.maghrib;
document.getElementById("isha-time").value = savedTimes.isha;

// Save times when input changes
document.querySelectorAll("input[type='time']").forEach(input => {
    input.addEventListener("change", () => {
        const updatedTimes = {
            fajr: document.getElementById("fajr-time").value,
            dhuhr: document.getElementById("dhuhr-time").value,
            asr: document.getElementById("asr-time").value,
            maghrib: document.getElementById("maghrib-time").value,
            isha: document.getElementById("isha-time").value
        };

        localStorage.setItem("prayerTimes", JSON.stringify(updatedTimes));
    });
});
