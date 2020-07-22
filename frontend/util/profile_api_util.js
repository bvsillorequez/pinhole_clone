// export const allUsers = () => (
//   $.ajax({
//      url: `/api/users`
//   })
// )

export const fetchUser = userId => (
  $.ajax({
     url: `/api/users/${userId}`
  })
)

//figure out what to connect to in the backend