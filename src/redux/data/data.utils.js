const addFormInReducer = (reducerForm, payload) => {
  if (reducerForm) {
    reducerForm.map((obj) => arr2.find((o) => o.id === obj.id) || obj)

    reducerForm.forEach((form) => {
      form.id === payload.id
    })
  }
}
