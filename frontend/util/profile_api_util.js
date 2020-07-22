export const currentUser = user => (
  $.ajax({
     url: `/api/users/${user}`
  })
)

//figure out what to connect to in the backend