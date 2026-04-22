export function calculateSolarRequirements(applianceStates, customAppliances, backupHours, appliances) {
  let totalWatts = 0;
  Object.entries(applianceStates).forEach(([id, state]) => {
    totalWatts += state.wattage * state.quantity;
  });
  customAppliances.forEach((a) => (totalWatts += a.wattage));

  let totalEnergyWh = 0;
  appliances.forEach((app) => {
    const state = applianceStates[app.id];
    if (state && state.quantity > 0) {
      const hours =
        app.isHighLoad || app.isSuperHighLoad || app.id === 'inverter-ac'
          ? state.backupHours || 0
          : backupHours;
      totalEnergyWh += state.wattage * state.quantity * hours;
    }
  });

  customAppliances.forEach((app) => {
    totalEnergyWh += app.wattage * backupHours;
  });

  const inverterVA = Math.ceil(totalWatts / 0.8);

  const batteryStorageNeededkWh =
    totalEnergyWh > 0
      ? totalEnergyWh / 1000
      : (totalWatts * backupHours * 8.5) / 1000;

  const batteryAh = Math.ceil((batteryStorageNeededkWh * 1000) / 12);
  const numBatteries = Math.ceil(batteryAh / 200);

  return {
    totalWatts,
    totalEnergyWh: batteryStorageNeededkWh * 1000,
    inverterVA,
    batteryAh,
    numBatteries,
  };
}
