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

end
