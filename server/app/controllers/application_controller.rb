class ApplicationController < ActionController::API

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

end
