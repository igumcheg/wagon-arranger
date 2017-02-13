export const wagonsReceived = (wagons) => ({
  type: "RECEIVE_WAGONS",
  wagons
});

export const newWagonsAdded = (wagons) => ({
  type: "ADD_NEW_WAGONS",
  wagons
});