Rails.application.routes.draw do
  devise_for :users
  root to: 'welcome#index'
  resources :dashboard, only: [:index]
  resources :users, only: [:index]

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %w[index create update edit]
    end
  end
end
