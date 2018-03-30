json.extract! post, :id, :author_id, :title, :body, :image_url, :topic_id
json.extract! post.author :username
