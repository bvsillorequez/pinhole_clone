class Api::PostsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  def index
    @posts = Post.all
    render 'api/posts/index'
  end

  def show
    # @post = Post.with_attached_photos.find_by(id: params[:id])
    @post = Post.find_by(id: params[:id])
  end

  def create

    @post = Post.new(post_params)
    if @post.user_id == current_user.id && @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find_by(id: params[:post][:id])
    if @post.user_id == current_user.id && @post && @post.update(post_params)
      render 'api/posts/show'
    # else
    #   render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.user_id == current_user.id
      @post.destroy
      render 'api/posts/show'
    end
  end

  private
  def post_params
    params.require(:post).permit(:id, :title, :body, :user_id, photo: [])
  end
end
