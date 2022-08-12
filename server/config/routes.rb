Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  scope 'api/v1' do
    resources :users

    scope '/auth' do
      post '/login', to: 'auth#create'
      get '/auto_login', to: 'auth#show'
      post '/signup', to: 'users#create'
    end
  end
end
