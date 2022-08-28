const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const initialBatteries = 0
const totalBatteries = batteryBatches.reduce((prevBattery, currentBattery) => prevBattery + currentBattery, initialBatteries)