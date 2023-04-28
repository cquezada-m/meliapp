Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'meli_chat/deposit'
      post 'meli_chat/paper_rolls_request'
      get 'meli_chat/indicator'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
