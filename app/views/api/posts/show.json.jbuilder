json.partial! "api/posts/post", post: @post

json.photoUrl @post.photo.map { |file| url_for(file) }