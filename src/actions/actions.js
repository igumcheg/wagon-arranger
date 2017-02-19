export const wagonsReceived = (filename, wagons) => ({
  type: "RECEIVE_WAGONS",
  wagons,
  filename
});

export const newWagonsAdded = (filename, wagons) => ({
  type: "ADD_NEW_WAGONS",
  wagons,
  filename
});