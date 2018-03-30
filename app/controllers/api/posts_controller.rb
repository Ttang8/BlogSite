class Api::PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render "api/posts/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render "api/posts/show"
  end

  def index
    @posts = Post.all
  end

  def post_params
    params.require(:post).permit(:title, :body, :topic_id, :image_url)
  end
end
