Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
