Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  scope 'api/v1' do
    resources :users
    resources :courses do
      member do
        # find how to DO IT
        delete 'remove_student'
      end
    end

    scope '/auth' do
      post '/login', to: 'auth#create'
      get '/auto_login', to: 'auth#show'
      post '/signup', to: 'users#create'
    end
  end
end
