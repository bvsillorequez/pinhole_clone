@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :title, :body, :user_id, :created_at, :updated_at
    post.photo.each do |photo|
      json.photoUrl url_for(photo)
    end
  end
end


