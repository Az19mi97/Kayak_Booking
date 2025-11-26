const setOngoingBooking = (payload) => {
  return {
    type: 'progressChange',
    payload
  }
}

export default setOngoingBooking;
