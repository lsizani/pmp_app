Rails.application.routes.draw do
  devise_for :users
  root to: 'dashboard#index'
  resources :dashboard, only: [:index]
  resources :users, only: [:index]
  resources :calender_event_registers, only: [:index]
  resources :calender_events, only: [:index]
  resources :rosters, only: [:index]
  resources :mentees, only: [:index]
  resources :mentors, only: [:index]

  match '/head_mentors' => 'mentors#heads', via: :get
  match '/sscs' => 'mentors#sscs', via: :get

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %w[index create update edit]
      resources :calender_event_registers, only: %w[index create update edit]
      resources :calender_events, only: %w[index create update edit]
      resources :rosters, only: %w[index create update edit]
      resources :mentees, only: %w[index create update edit]
      resources :mentors, only: %w[index create update edit]
    end
  end
end
