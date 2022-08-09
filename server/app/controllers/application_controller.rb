class ApplicationController < ActionController::API
  before_action :authorized
  # JWT Key stored as credentials
  def jwt_key
    Rails.application.credentials.jwt_key
  end

  # Get token from the request
  def auth_header
    request.headers['Authorization']
  end

  # JWT Token generator
  def issue_token(user)
    JWT.encode({ user_id: user.id }, jwt_key)
  end

  # Decode JWT Token
  def decoded_token
    if auth_header
      # header: { 'Authorization': 'Bearer <token>' }
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, jwt_key, true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  # Get user_id from decoded token
  def user_id
    decoded_token[0]['user_id']
  end

  # Find user in DB
  def current_user
    @user || User.find_by(id: user_id)
  end

  # Check if user is logged in
  def logged_in?
    !!current_user
  end

  private

  # If authorized then user can proceed API requests otherwise log in is needed
  def authorized
    render json: { message: 'Please log in.' }, status: 401 unless logged_in?
  end

end
