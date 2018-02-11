# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :text
#  author_id  :integer
#  topic_id   :integer
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :body, presence: true

  belongs_to :topic

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end
