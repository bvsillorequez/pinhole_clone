class Api::PostsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def create
    debugger
    @post = Post.new(post_params)
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find_by(id: params[:id])

    if @post && @post.update(post_params)
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    render 'api/posts/show'
  end

  private
  def post_params
    debugger
    params.require(:post).permit(:title, :body, :user_id)
  end
end
