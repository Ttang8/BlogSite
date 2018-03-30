@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', post: post
    json.image_url asset_path(post.image_url)
  end
end
