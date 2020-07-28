export const createLike = (userId, postId) => {
  return (
    $.ajax({
      url: `/api/likes`,
      method: 'POST',
      data: { 
        user_id: userId,
        post_id: postId 
      }
    })
  )
}

export const deleteLike = likeId => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: 'DELETE'
  })
)