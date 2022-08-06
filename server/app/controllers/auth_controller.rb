class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  # New session
  def create
    user = User.find_by(email: auth_params[:email])
    if user&.authenticate(auth_params[:password])
      token = issue_token(user)
      render json: { user: user.as_json, token: token }, status: 200
    else
      render json: { error: 'No such user exists' }, status: 401
    end
  end

  def auth_params
    params.require(:auth).permit(:email, :password)
  end
end
