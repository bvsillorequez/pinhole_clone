class Api::PostsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  def index
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
    else
    end
  end

  def update
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
