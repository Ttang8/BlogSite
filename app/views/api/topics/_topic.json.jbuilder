json.extract! topic, :id, :title

json.set! :posts do
  json.array! topic.posts do |post|
    json.partial! 'api/posts/post', post: post
  end
end
