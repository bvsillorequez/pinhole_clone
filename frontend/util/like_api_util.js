export const createLike = like => (
  $.ajax({
    url: `/api/likes`,
    methid: 'POST',
    data: { like }
  })
)

export const deleteLike = likeId => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: 'DELETE'
  })
)