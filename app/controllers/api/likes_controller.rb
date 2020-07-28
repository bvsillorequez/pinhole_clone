class Api::LikesController < ApplicationController
  before_action :require_login, only: [:create, :destroy]
  def create
    if params[:user_id].to_i == current_user.id
      @like = Like.new
      @like.user_id = current_user.id
      @like.post_id = params[:post_id].to_i
      if @like.save
        render 'api/likes/show' #this is just a dummie for now
      else
        render json: @like.errors.full_message, status: 422
      end
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    @like.destroy
    render 'api/likes/show' #this is just a dummie for now
  end

  private
  # def like_params
  #   params.require(:like).permit(:user_id, :post_id)
  # end
end
