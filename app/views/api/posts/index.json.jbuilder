# json.array! @posts, :id, :title, :body, :user_id, :created_at, :updated_at

@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :title, :body, :user_id, :created_at, :updated_at
    json.photoUrl url_for(post.photo) if post.photo.attached?
  end
end
